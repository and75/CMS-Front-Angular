import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminNetworksService } from '../services/admin-networks.service';

@Component({
  selector: 'app-networks-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './networks-form.component.html',
  styleUrls: ['./networks-form.component.scss']
})
export class NetworksFormComponent {
  networkForm: FormGroup;
  isEditMode = false;

  constructor(private fb: FormBuilder) {
    this.networkForm = this.fb.group({
      label: ['', Validators.required],
      url: ['', [Validators.required, Validators.pattern('https?://.*')]],
      category: ['cggg', Validators.required],
      status: ['active', Validators.required]
    });
  }

  onSubmit() {
    if (this.networkForm.valid) {
      console.log(this.networkForm.value);
    }
  }
}