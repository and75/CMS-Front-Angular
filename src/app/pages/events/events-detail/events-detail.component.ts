import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AsyncPipe, NgIf, DatePipe, CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EventsService} from '../../../core/services/events.service';
import { EventData } from '../../../core/models/event.model';
import { switchMap, tap } from 'rxjs';
import { SeoService } from '../../../core/services/seo.service';
import {ExternalScriptLoaderService} from '../../../core/services/external-script-loader.service';
import { EventsNavigatorComponent } from '../../../shared/events-navigator/events-navigator.component';
import { PageService } from '../../../core/services/page.service';
import { environment } from '../../../../environments/environment';
@Component({
    selector: 'app-events-detail',
    standalone :true,
    imports: [
        CommonModule,
        AsyncPipe,
        NgIf,
        EventsNavigatorComponent
    ],
    templateUrl: './events-detail.component.html',
    styleUrls: ['./events-detail.component.scss']
})
export class EventsDetailComponent implements OnInit, AfterViewInit {
  
  title= 'Events';
  description = 'Browse our upcoming and past events';
  bgcolor = '#0043a8';

  event$ = this.route.params.pipe(
    switchMap(params => this.eventsService.getDetail(params['slug'])),
    tap(event => {
      const { previous, next } = this.eventsService.getAdjacentEvents(event.id);
      this.previousEvent = previous;
      this.nextEvent = next;
      this.pageService.setPage({
          title: event?.title,
          description: event?.description || '',
          image: `${environment.routeMother}/assets/img/events-card.png`,
        }, 'events');
    })
  );

  previousEvent: EventData | null = null;
  nextEvent: EventData | null = null;

  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService,
    private seo: SeoService,
    private sriptLoader :ExternalScriptLoaderService,
    private pageService : PageService
  ) {}

  ngOnInit() {

  }
  ngAfterViewInit(): void {
    this.sriptLoader.initParticles(); 
  }
}