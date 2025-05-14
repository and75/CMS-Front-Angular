import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AuthService } from '../../services/auth.service';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: Router;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
    authServiceSpy.login.and.returnValue(of({ token: 'test-token', user: { id: '1', username: 'test', role: 'admin' } }));

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        LoginComponent
      ],
      providers: [
        { provide: AuthService, useValue: authServiceSpy }
      ]
    }).compileComponents();

    router = TestBed.inject(Router);
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty form', () => {
    expect(component.loginForm.get('username')?.value).toBe('');
    expect(component.loginForm.get('password')?.value).toBe('');
  });

  it('should validate required fields', () => {
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls['username'].setValue('test');
    component.loginForm.controls['password'].setValue('test123');
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should handle successful login', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.loginForm.setValue({
      username: 'test',
      password: 'test123'
    });

    component.onSubmit();

    expect(authService.login).toHaveBeenCalledWith('test', 'test123');
    expect(navigateSpy).toHaveBeenCalledWith(['/admin/dashboard']);
  });

  it('should handle login error', () => {
    authService.login.and.returnValue(throwError(() => new Error('Invalid credentials')));
    component.loginForm.setValue({
      username: 'wrong',
      password: 'wrong'
    });

    component.onSubmit();

    expect(component.errorMessage).toBe('Invalid credentials');
    expect(component.isSubmitting).toBeFalse();
  });

  it('should toggle password visibility', () => {
    expect(component.showPassword).toBeFalse();
    component.togglePasswordVisibility();
    expect(component.showPassword).toBeTrue();
    component.togglePasswordVisibility();
    expect(component.showPassword).toBeFalse();
  });
});