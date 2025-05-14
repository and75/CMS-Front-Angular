import { Component, OnInit } from '@angular/core';
import { PageService } from '../../core/services/page.service';
import { ProjectDescriptionComponent } from '../../shared/project-description/project-description.component';
import { TeamGridComponent } from '../../shared/team-grid/team-grid.component';
import { UpcomingEventsComponent } from '../../shared/upcoming-events/upcoming-events.component';
import { LatestNewsComponent } from '../../shared/latest-news/latest-news.component';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProjectDescriptionComponent,
    TeamGridComponent,
    UpcomingEventsComponent,
    LatestNewsComponent

  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private pageService: PageService, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(() => this.pageService.getPageBySlug('home'))
    ).subscribe()
  }
}