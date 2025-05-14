import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminBibliographyService } from '../services/admin-bibliography.service';
import { BehaviorSubject, switchMap } from 'rxjs';
import { PaginationParams } from '../../core/models/pagination.model';
import { ListContainerComponent } from '../../shared/list-container/list-container.component';

@Component({
  selector: 'app-bibliography-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ListContainerComponent
  ],
  templateUrl: './bibliography-list.component.html',
  styleUrls: ['./bibliography-list.component.scss']
})
export class BibliographyListComponent {
  paginationParams$ = new BehaviorSubject<PaginationParams>({
    page: 1,
    limit: 10,
    search: '',
    sort: '',
    order: 'desc'
  });

  paginatedData$ = this.paginationParams$.pipe(
    switchMap(params => this.bibliographyService.getList(params))
  );

  sortOptions = [
    { value: 'title', label: 'Title' },
    { value: 'author', label: 'Author' },
    { value: 'year', label: 'Year' },
    { value: 'type', label: 'Type' },
    { value: 'status', label: 'Status' }
  ];

  constructor(private bibliographyService: AdminBibliographyService) { }

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

  deleteEntry(id: string) {
    if (confirm('Are you sure you want to delete this bibliography entry?')) {
      this.bibliographyService.delete(id).subscribe(() => {
        this.paginationParams$.next(this.paginationParams$.value);
      });
    }
  }
}