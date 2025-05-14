import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminTeamService } from '../services/admin-team.service';
import { BehaviorSubject, switchMap } from 'rxjs';
import { PaginationParams } from '../../core/models/pagination.model';
import { ListContainerComponent } from '../../shared/list-container/list-container.component';

@Component({
  selector: 'app-team-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ListContainerComponent
  ],
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent {
  paginationParams$ = new BehaviorSubject<PaginationParams>({
    page: 1,
    limit: 10,
    search: '',
    sort: '',
    order: 'desc'
  });

  paginatedData$ = this.paginationParams$.pipe(
    switchMap(params => this.teamService.getList(params))
  );

  sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'role', label: 'Position' },
    { value: 'status', label: 'Status' }
  ];

  constructor(private teamService: AdminTeamService) { }

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

  deleteMember(id: string) {
    if (confirm('Are you sure you want to delete this team member?')) {
      this.teamService.delete(id).subscribe(() => {
        this.paginationParams$.next(this.paginationParams$.value);
      });
    }
  }
}