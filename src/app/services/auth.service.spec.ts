import { TestBed } from '@angular/core/testing';
import { AuthService } from '../admin/services/auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should handle login correctly', () => {
    const credentials = {
      username: 'admin',
      password: 'admin123'
    };

    service.login(credentials.username, credentials.password).subscribe({
      next: (response) => {
        expect(response).toBeTruthy();
        expect(response.token).toBeTruthy();
        expect(response.user.username).toBe(credentials.username);
      }
    });
  });

  it('should handle invalid login', () => {
    service.login('wrong', 'wrong').subscribe({
      error: (error) => {
        expect(error).toBeTruthy();
        expect(error.message).toBe('Invalid credentials');
      }
    });
  });

  it('should handle logout', () => {
    service.login('admin', 'admin123').subscribe(() => {
      expect(service.isAuthenticated()).toBe(true);
      service.logout();
      expect(service.isAuthenticated()).toBe(false);
    });
  });
});