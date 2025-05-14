import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminResourcesService } from '../services/admin-resources.service';

@Component({
  selector: 'app-resources-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './resources-form.component.html',
  styleUrls: ['./resources-form.component.scss']
})
export class ResourcesFormComponent {
  resourceForm: FormGroup;
  isEditMode = false;

  constructor(private fb: FormBuilder) {
    this.resourceForm = this.fb.group({
      label: ['', Validators.required],
      url: ['', [Validators.required, Validators.pattern('https?://.*')]],
      year: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      category: ['documents', Validators.required],
      youtubeUrl: ['', Validators.pattern('https?://.*')],
      thumbnail: ['', Validators.pattern('https?://.*')],
      status: ['active', Validators.required]
    });
  }

  onSubmit() {
    if (this.resourceForm.valid) {
      console.log(this.resourceForm.value);
    }
  }
}