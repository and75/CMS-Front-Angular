import { Component } from '@angular/core';
import { AsyncPipe, NgIf, DatePipe, CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NewsService } from '../../../core/services/news.service';
import { ListContainerComponent } from '../../../shared/list-container/list-container.component';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import { PaginationParams } from '../../../core/models/pagination.model';
import { ContentStatus } from '../../../core/models/post.model';
import { NewsCategoryFilterComponent } from './filters/news-category-filter.component';
import { NewsOrderComponent } from './filters/news-order.component';
import { PageService } from '../../../core/services/page.service';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    DatePipe,
    RouterLink,
    ListContainerComponent,
    NewsCategoryFilterComponent,
    NewsOrderComponent
  ],
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent {
  ContentStatus = ContentStatus;
  selectedCategory: string = 'all';

  paginationParams$ = new BehaviorSubject<PaginationParams>({
    page: 1,
    limit: 10,
    search: '',
    sort: 'publishedAt',
    order: 'desc' as 'asc' | 'desc'
  });

  paginatedData$ = this.paginationParams$.pipe(
    switchMap(params => this.newsService.getList({ ...params, category: this.selectedCategory }))
  );

  sortOptions = [
    { value: 'title', label: 'Title' },
    { value: 'publishedAt', label: 'Published Date' },
    { value: 'status', label: 'Status' }
  ];

  categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'technology', name: 'Technology' },
    { id: 'science', name: 'Science' },
    { id: 'research', name: 'Research' }
  ];

  constructor(
    private newsService: NewsService,
    private pageService: PageService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(() => this.pageService.getPageBySlug('news'))
    ).subscribe()
  }

  onParamsChange(params: PaginationParams) {
    this.paginationParams$.next(params);
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    const currentParams = this.paginationParams$.value;
    this.paginationParams$.next({
      ...currentParams,
      page: 1
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
}