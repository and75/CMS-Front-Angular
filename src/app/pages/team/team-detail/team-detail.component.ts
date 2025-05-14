import { Component } from '@angular/core';
import { AsyncPipe, NgIf, CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../../../core/services/team.service';
import { switchMap, map, combineLatest, tap } from 'rxjs';
import { TeamNavigatorComponent } from '../../../shared/team-navigator/team-navigator.component';
import { HeroSectionArchiveComponent } from '../../../shared/hero-section-archive/hero-section-archive.component';
import { PageService } from '../../../core/services/page.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-team-detail',
  standalone: true,
  imports: [CommonModule, AsyncPipe, NgIf, TeamNavigatorComponent],
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent {

data$ = combineLatest([
  this.route.params.pipe(
    switchMap(params => this.teamService.getDetail(params['slug'])),
    tap(member => {
      this.pageService.setPage({
        title: member?.name || '', // oppure member?.name, dipende da struttura
        description: member?.projectDesc || '',
        image: `${environment.routeMother+member.img}`
      }, 'events');
    })
  ),
  this.teamService.getList({ page: 1, limit: 100, search: '', sort: '', order: 'asc' }).pipe(
    map(response => response.items)
  )
]).pipe(
  map(([member, allMembers]) => ({ member, allMembers }))
);


  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private pageService: PageService
  ) { }
}