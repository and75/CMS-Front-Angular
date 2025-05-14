import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamService } from '../../core/services/team.service';
import { BehaviorSubject, switchMap } from 'rxjs';
import { PaginationParams } from '../../core/models/pagination.model';

@Component({
    selector: 'app-team-grid',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './team-grid.component.html',
    styleUrls: ['./team-grid.component.scss']
})
export class TeamGridComponent {
  paginationParams$ = new BehaviorSubject<PaginationParams>({
    page: 1,
    limit: 40,
    search: '',
    sort: '',
    order: 'desc'
  });

  teamMembers$ = this.paginationParams$.pipe(
    switchMap(params => this.teamService.getList(params))
  );

  constructor(private teamService: TeamService) {}
}