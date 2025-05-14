import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-newsletter',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    template: `
    <div class="newsletter-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <h5>Subscribe to Our Newsletter</h5>
            <p class="text-muted">Stay updated with our latest news and announcements</p>
            <form [formGroup]="newsletterForm" (ngSubmit)="onSubmit()" class="newsletter-form">
              <div class="input-group">
                <input 
                  type="email" 
                  class="form-control" 
                  placeholder="Enter your email"
                  formControlName="email">
                <button 
                  type="submit" 
                  class="btn btn-light"
                  [disabled]="newsletterForm.invalid || isSubmitting">
                  {{ isSubmitting ? 'Subscribing...' : 'Subscribe' }}
                </button>
              </div>
              <div class="text-danger mt-2" *ngIf="newsletterForm.get('email')?.touched && newsletterForm.get('email')?.invalid">
                Please enter a valid email address
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .newsletter-section {
      padding: 2rem 0;
      text-align: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      h5 {
        color: white;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
      }

      p {
        margin-bottom: 1.5rem;
      }

      .newsletter-form {
        max-width: 500px;
        margin: 0 auto;

        .input-group {
          .form-control {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: white;

            &::placeholder {
              color: rgba(255, 255, 255, 0.6);
            }

            &:focus {
              box-shadow: none;
              border-color: rgba(255, 255, 255, 0.5);
            }
          }

          .btn {
            &:hover {
              background: #f8f9fa;
            }
          }
        }
      }
    }
  `]
})
export class NewsletterComponent {
  newsletterForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.newsletterForm.valid) {
      this.isSubmitting = true;
      // TODO: Implement subscription logic
      console.log(this.newsletterForm.value);
      setTimeout(() => {
        this.isSubmitting = false;
        this.newsletterForm.reset();
      }, 1000);
    }
  }
}