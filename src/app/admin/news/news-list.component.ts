import { Component } from '@angular/core';
import { AsyncPipe, NgIf, DatePipe, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminNewsService } from '../services/admin-news.service';
import { ListContainerComponent } from '../../shared/list-container/list-container.component';
import { PaginationParams } from '../../core/models/pagination.model';
import { BehaviorSubject, switchMap } from 'rxjs';
import { Post, ContentStatus } from '../../core/models/post.model';

@Component({
    selector: 'app-news-list',
    standalone: true,
    imports: [
        CommonModule,
        AsyncPipe,
        DatePipe,
        RouterLink,
        FormsModule,
        ListContainerComponent
    ],
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent {
  ContentStatus = ContentStatus;
  
  paginationParams$ = new BehaviorSubject<PaginationParams>({
    page: 1,
    limit: 10,
    search: '',
    sort: '',
    order: 'desc'
  });

  paginatedData$ = this.paginationParams$.pipe(
    switchMap(params => this.newsService.getList(params))
  );

  sortOptions = [
    { value: 'title', label: 'Title' },
    { value: 'publishedAt', label: 'Published Date' },
    { value: 'status', label: 'Status' }
  ];

  constructor(private newsService: AdminNewsService) {}

  onParamsChange(params: PaginationParams) {
    this.paginationParams$.next(params);
  }

  onSearch(search: string) {
    const currentParams = this.paginationParams$.value;
    this.paginationParams$.next({
      ...currentParams,
      search,
      page: 1 // Reset to first page when searching
    });
  }

  onSortChange(sort: string) {
    const currentParams = this.paginationParams$.value;
    this.paginationParams$.next({
      ...currentParams,
      sort
    });
  }

  onOrderChange(order: 'asc' | 'desc') {
    const currentParams = this.paginationParams$.value;
    this.paginationParams$.next({
      ...currentParams,
      order
    });
  }

  deletePost(id: string) {
    if (confirm('Are you sure you want to delete this post?')) {
      this.newsService.delete(id).subscribe(() => {
        this.paginationParams$.next(this.paginationParams$.value);
      });
    }
  }
}