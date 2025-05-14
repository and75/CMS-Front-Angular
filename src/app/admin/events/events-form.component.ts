import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-events-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.scss']
})
export class EventsFormComponent {
  eventForm: FormGroup;
  isEditMode = false;

  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
      status: ['draft', Validators.required]
    });
  }

  onSubmit() {
    if (this.eventForm.valid) {
      console.log(this.eventForm.value);
    }
  }
}