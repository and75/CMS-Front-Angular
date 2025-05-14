import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminTeamService } from '../services/admin-team.service';

@Component({
  selector: 'app-team-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent {
  teamForm: FormGroup;
  isEditMode = false;

  constructor(private fb: FormBuilder) {
    this.teamForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      position: ['', Validators.required],
      department: ['', Validators.required],
      photo: ['', [Validators.required, Validators.pattern('https?://.*')]],
      bio: ['', Validators.required],
      linkedin: ['', Validators.pattern('https?://.*')],
      twitter: ['', Validators.pattern('https?://.*')],
      github: ['', Validators.pattern('https?://.*')],
      status: ['active', Validators.required]
    });
  }

  onSubmit() {
    if (this.teamForm.valid) {
      console.log(this.teamForm.value);
    }
  }
}