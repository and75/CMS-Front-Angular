import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminNetworksService } from '../services/admin-networks.service';
import { BehaviorSubject, switchMap } from 'rxjs';
import { PaginationParams } from '../../core/models/pagination.model';
import { ListContainerComponent } from '../../shared/list-container/list-container.component';

@Component({
  selector: 'app-networks-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ListContainerComponent
  ],
  templateUrl: './networks-list.component.html',
  styleUrls: ['./networks-list.component.scss']
})
export class NetworksListComponent {
  paginationParams$ = new BehaviorSubject<PaginationParams>({
    page: 1,
    limit: 10,
    search: '',
    sort: '',
    order: 'desc'
  });

  paginatedData$ = this.paginationParams$.pipe(
    switchMap(params => this.networksService.getList(params))
  );

  sortOptions = [
    { value: 'label', label: 'Label' },
    { value: 'category', label: 'Category' },
    { value: 'status', label: 'Status' }
  ];

  constructor(private networksService: AdminNetworksService) { }

  getCategoryClass(category: string): string {
    const classes = {
      cggg: 'bg-primary',
      axe: 'bg-info',
      france: 'bg-secondary',
      international: 'bg-dark'
    };
    return classes[category as keyof typeof classes] || 'bg-secondary';
  }

  onParamsChange(params: PaginationParams) {
    this.paginationParams$.next(params);
  }

  onSearch(search: string) {
    const currentParams = this.paginationParams$.value;
    this.paginationParams$.next({
      ...currentParams,
      search,
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

  deleteNetwork(id: string) {
    if (confirm('Are you sure you want to delete this network?')) {
      this.networksService.delete(id).subscribe(() => {
        this.paginationParams$.next(this.paginationParams$.value);
      });
    }
  }
}