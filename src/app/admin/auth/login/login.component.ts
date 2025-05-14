import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    standalone:true,
    imports: [ReactiveFormsModule, RouterLink, CommonModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  isSubmitting = false;
  errorMessage = '';
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isSubmitting = true;
      this.errorMessage = '';

      const { username, password } = this.loginForm.value;
      
      console.log('Attempting login...');
      this.authService.login(username, password).subscribe({
        next: () => {
          console.log('Login successful, redirecting...');
          this.router.navigate(['/admin/dashboard']);
        },
        error: (error: Error) => {
          console.error('Login error:', error);
          this.isSubmitting = false;
          this.errorMessage = error.message || 'Invalid credentials';
        }
      });
    }
  }
}