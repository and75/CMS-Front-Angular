import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  // Import FormBuilder and Validators
import { MailingListService } from '../../core/services/mailing-list.service';  // Import the mailing list service
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';  // Use ReactiveFormsModule for form control
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-mailing-list',
  standalone: true,  // This makes the component standalone
  imports: [HttpClientModule, ReactiveFormsModule],  // Import necessary modules for HTTP and reactive forms
  templateUrl: './mailing-list.component.html',
  styleUrls: ['./mailing-list.component.scss'],
})
export class MailingListComponent {
  mailingListForm: FormGroup;  // Declare the form group

  constructor(private fb: FormBuilder, private mailingListService: MailingListService) {
    // Initialize the form with validation rules
    this.mailingListForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      institution: ['', Validators.required],
    });
  }

  // Handle form submission
  onSubmit() {
    if (this.mailingListForm.valid) {
      // Call service to subscribe the user if the form is valid
      this.mailingListService.subscribe(
        this.mailingListForm.value.Name,
        this.mailingListForm.value.Institution,
        this.mailingListForm.value.email
      ).subscribe({
        next: () => alert('Subscription successful!'),
        error: (err) => alert('Error: ' + err.message),
      });
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
}
