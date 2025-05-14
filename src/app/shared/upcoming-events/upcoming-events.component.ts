import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EventsService } from '../../core/services/events.service';
import { BehaviorSubject, map } from 'rxjs';
import { PaginationParams } from '../../core/models/pagination.model';
import { SocialShareComponent } from '../social-share/social-share.component';
import { TruncatePipe } from '../../core/pipes/truncate.pipe';
@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [CommonModule, RouterLink,SocialShareComponent,TruncatePipe ],
  templateUrl: './upcoming-events.component.html',
  styles: [`
        .event-date{
          font-size: 3rem !important;
          line-height: 1;
          width: 200px;
          height: 200px;
          font-weight: bold;
        }
        .text-event{
          color: #2143a9 !important;
        }
        /* Contenitore principale della sezione */
        .overlay-section.last-news {
        position: relative;
        min-height: 100vh;
        background-color:rgb(0, 67, 168);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Primo div: sfondo */
    .overlay-section.last-news #background-div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    /* Secondo div: contenuto sopra */
    .overlay-section.last-news .content-div {
        position: relative;
        z-index: 1;
        border-radius: 10px;
        color: white;
        width: 100vw;
    }
  `]
})
export class UpcomingEventsComponent {
  paginationParams$ = new BehaviorSubject<PaginationParams>({
    page: 1,
    limit: 4,
    search: '',
    sort: 'date_start',
    order: 'asc'
  });

  events$ = this.eventsService.getList(this.paginationParams$.value).pipe(
    map(response => {
      const now = new Date();
      return response.items
        .filter(event => new Date(event.date_start) >= now)
        .slice(0, 4);
    })
  );

  constructor(private eventsService: EventsService) { }
}