import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminResourcesService } from '../services/admin-resources.service';
import { BehaviorSubject, switchMap } from 'rxjs';
import { PaginationParams } from '../../core/models/pagination.model';
import { ListContainerComponent } from '../../shared/list-container/list-container.component';

@Component({
  selector: 'app-resources-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ListContainerComponent
  ],
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.scss']
})
export class ResourcesListComponent {
  paginationParams$ = new BehaviorSubject<PaginationParams>({
    page: 1,
    limit: 10,
    search: '',
    sort: '',
    order: 'desc'
  });

  paginatedData$ = this.paginationParams$.pipe(
    switchMap(params => this.resourcesService.getList(params))
  );

  sortOptions = [
    { value: 'label', label: 'Label' },
    { value: 'year', label: 'Year' },
    { value: 'category', label: 'Category' },
    { value: 'status', label: 'Status' }
  ];

  constructor(private resourcesService: AdminResourcesService) { }

  getCategoryClass(category: string): string {
    const classes = {
      videos: 'bg-danger',
      documents: 'bg-primary',
      presentations: 'bg-info',
      datasets: 'bg-secondary'
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

  deleteResource(id: string) {
    if (confirm('Are you sure you want to delete this resource?')) {
      this.resourcesService.delete(id).subscribe(() => {
        this.paginationParams$.next(this.paginationParams$.value);
      });
    }
  }
}