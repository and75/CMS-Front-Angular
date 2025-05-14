import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bibliography-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './bibliography-form.component.html',
  styleUrls: ['./bibliography-form.component.scss']
})
export class BibliographyFormComponent {
  bibliographyForm: FormGroup;
  isEditMode = false;

  constructor(private fb: FormBuilder) {
    this.bibliographyForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(1000), Validators.max(9999)]],
      type: ['book', Validators.required],
      description: ['', Validators.required],
      status: ['draft', Validators.required]
    });
  }

  onSubmit() {
    if (this.bibliographyForm.valid) {
      console.log(this.bibliographyForm.value);
    }
  }
}