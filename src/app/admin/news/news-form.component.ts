import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminNewsService } from '../services/admin-news.service';
import { ContentStatus } from '../../core/models/post.model';

@Component({
  selector: 'app-news-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {
  newsForm: FormGroup;
  isEditMode = false;
  isSubmitting = false;
  ContentStatus = ContentStatus;

  constructor(
    private fb: FormBuilder,
    private newsService: AdminNewsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.newsForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      excerpt: ['', Validators.required],
      status: [ContentStatus.DRAFT, Validators.required]
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.newsService.getById(id).subscribe(post => {
        this.newsForm.patchValue({
          title: post.title,
          content: post.content,
          excerpt: post.excerpt,
          status: post.status
        });
      });
    }
  }

  onSubmit() {
    if (this.newsForm.valid) {
      this.isSubmitting = true;
      const id = this.route.snapshot.params['id'];
      const operation = this.isEditMode
        ? this.newsService.update(id, this.newsForm.value)
        : this.newsService.create(this.newsForm.value);

      operation.subscribe({
        next: () => {
          this.router.navigate(['/admin/news']);
        },
        error: (error) => {
          console.error('Error saving post:', error);
          this.isSubmitting = false;
        }
      });
    }
  }
}