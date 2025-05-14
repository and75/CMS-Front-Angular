import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

interface AuthResponse {
  token: string;
  user: {
    id: string;
    username: string;
    role: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'auth_user';
  private readonly VALID_CREDENTIALS = {
    username: 'admin',
    password: 'admin123'
  };
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    console.log('AuthService initialized');
  }

  login(username: string, password: string): Observable<AuthResponse> {
    console.log('Login attempt:', { username });
    
    if (this.isBrowser) {
      this.logout();
    }

    if (username === this.VALID_CREDENTIALS.username && 
        password === this.VALID_CREDENTIALS.password) {
      
      const response: AuthResponse = {
        token: btoa(JSON.stringify({
          id: '1',
          username,
          exp: Date.now() + (24 * 60 * 60 * 1000)
        })),
        user: {
          id: '1',
          username: this.VALID_CREDENTIALS.username,
          role: 'admin'
        }
      };
      
      if (this.isBrowser) {
        localStorage.setItem(this.TOKEN_KEY, response.token);
        localStorage.setItem(this.USER_KEY, JSON.stringify(response.user));
      }
      
      console.log('Login successful');
      return of(response).pipe(
        delay(500),
        tap(() => console.log('Auth data stored'))
      );
    }
    
    console.log('Login failed: Invalid credentials');
    return throwError(() => new Error('Invalid credentials'));
  }

  logout(): void {
    console.log('Logging out, clearing auth data');
    if (this.isBrowser) {
      localStorage.removeItem(this.TOKEN_KEY);
      localStorage.removeItem(this.USER_KEY);
    }
  }

  isAuthenticated(): boolean {
    if (!this.isBrowser) return false;

    const token = localStorage.getItem(this.TOKEN_KEY);
    const userStr = localStorage.getItem(this.USER_KEY);
    
    if (!token || !userStr) {
      console.log('No auth data found');
      return false;
    }

    try {
      const tokenData = JSON.parse(atob(token));
      if (tokenData.exp < Date.now()) {
        console.log('Token expired');
        this.logout();
        return false;
      }

      const user = JSON.parse(userStr);
      const isAuth = !!token && !!user;
      console.log('Auth check result:', isAuth);
      return isAuth;
    } catch (error) {
      console.error('Error parsing auth data:', error);
      this.logout();
      return false;
    }
  }

  getUser(): any {
    if (!this.isBrowser) return null;

    const userStr = localStorage.getItem(this.USER_KEY);
    if (!userStr) {
      console.log('No user data found');
      return null;
    }

    try {
      return JSON.parse(userStr);
    } catch (error) {
      console.error('Error parsing user data:', error);
      this.logout();
      return null;
    }
  }
}