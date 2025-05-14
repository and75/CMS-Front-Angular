import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe, NgFor, NgIf, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminEventsService } from '../services/admin-events.service';
import { BehaviorSubject, switchMap } from 'rxjs';
import { PaginationParams } from '../../core/models/pagination.model';
import { ListContainerComponent } from '../../shared/list-container/list-container.component';

@Component({
    selector: 'app-events-list',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        DatePipe,
        NgFor,
        FormsModule,
        ListContainerComponent
    ],
    templateUrl: './events-list.component.html',
    styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent {
  paginationParams$ = new BehaviorSubject<PaginationParams>({
    page: 1,
    limit: 10,
    search: '',
    sort: '',
    order: 'desc'
  });

  paginatedData$ = this.paginationParams$.pipe(
    switchMap(params => this.eventsService.getList(params))
  );

  sortOptions = [
    { value: 'title', label: 'Title' },
    { value: 'startDate', label: 'Date' },
    { value: 'location', label: 'Location' },
    { value: 'status', label: 'Status' }
  ];

  constructor(private eventsService: AdminEventsService) {}

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

  deleteEvent(id: string) {
    if (confirm('Are you sure you want to delete this event?')) {
      this.eventsService.delete(id).subscribe(() => {
        this.paginationParams$.next(this.paginationParams$.value);
      });
    }
  }
}