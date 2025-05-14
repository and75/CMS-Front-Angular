import { Component } from '@angular/core';
import { AsyncPipe, NgIf, CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EventsService } from '../../../core/services/events.service';
import { HeroSectionArchiveComponent } from '../../../shared/hero-section-archive/hero-section-archive.component';
import { BehaviorSubject, switchMap } from 'rxjs';
import { PaginationParams } from '../../../core/models/pagination.model';
import { EventsCategoryFilterComponent } from './filters/events-category-filter.component';
import { EventsOrderComponent } from './filters/events-order.component';
import { SocialShareComponent } from '../../../shared/social-share/social-share.component';
import { SeoService } from '../../../core/services/seo.service';
import { PaginationComponent } from '../../../shared/pagination/pagination.component';
import { PageService } from '../../../core/services/page.service';

@Component({
    selector: 'app-events-list',
    standalone: true,
    imports: [
    CommonModule,
    AsyncPipe,
    RouterLink,
    EventsCategoryFilterComponent,
    EventsOrderComponent,
    SocialShareComponent,
    PaginationComponent
],
    templateUrl: './events-list.component.html',
    styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent {
  selectedCategory: string = 'All';

  categories = [
    { id: 'All', name: 'All Events' },
    { id: 'Conference', name: 'Conferences' },
    { id: 'Workshop', name: 'Workshops' },
    { id: 'Seminar', name: 'Seminars' },
    { id: 'Meeting', name: 'Meetings' }
  ];

  sortOptions = [
    { value: 'date_start', label: 'Date' },
    { value: 'title', label: 'Title' },
    { value: 'category', label: 'Category' }
  ];

  paginationParams$ = new BehaviorSubject<PaginationParams>({
    page: 1,
    limit: 20,
    search: '',
    sort: 'date_start',
    order: 'desc'
  });

  events$ = this.paginationParams$.pipe(
    switchMap(params => this.eventsService.getList({ ...params, category: this.selectedCategory }))
  );

  constructor(
    private eventsService: EventsService, 
    private pageService: PageService, 
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.pipe(
      switchMap(() => this.pageService.getPageBySlug('events'))
    ).subscribe()
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

  onPageChange(page: number) {
    const currentParams = this.paginationParams$.value;
    this.paginationParams$.next({
      ...currentParams,
      page
    });
  }

  onItemsPerPageChange(limit: number) {
    const currentParams = this.paginationParams$.value;
    this.paginationParams$.next({
      ...currentParams,
      limit,
      page: 1
    });
  }
}