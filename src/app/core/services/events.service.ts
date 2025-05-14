import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ApiService } from '../services/api.service';
import { PaginationParams, PaginatedResponse } from '../models/pagination.model';
import { PageContent } from '../models/page.model';
import { environment } from '../../../environments/environment';
import { mockEvents} from "../mock/events.mock-db";
import { EventData } from "../models/event.model";

export interface EventsParams extends PaginationParams {
  category?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private apiService: ApiService) {}

  getList(params: EventsParams): Observable<PaginatedResponse<EventData>> {
    if (!environment.production) {
      return this.getMockEvents(params);
    }
    return this.apiService.getList<EventData>('posts', params);
  }

  getDetail(slug: string): Observable<EventData> {
    return this.getMockEventDetail(slug);
  }

  getAdjacentEvents(currentSlug: string): { previous: EventData | null; next: EventData | null } {
    if (!environment.production) {
      const currentIndex = mockEvents.findIndex(event => event.id === currentSlug);
      return {
        previous: currentIndex > 0 ? mockEvents[currentIndex - 1] : null,
        next: currentIndex < mockEvents.length - 1 ? mockEvents[currentIndex + 1] : null
      };
    }
    return { previous: null, next: null };
  }

  private getMockEventDetail(slug: string): Observable<any> {
    const item = mockEvents.find(e => e.slug === slug);
    return of(item).pipe();
  }

  private getMockEvents(params: EventsParams): Observable<PaginatedResponse<EventData>> {
    let filteredEvents = [...mockEvents];

    if (params.search) {
      const searchLower = params.search.toLowerCase();
      filteredEvents = filteredEvents.filter(event => 
        event.title.toLowerCase().includes(searchLower) ||
        event.description.toLowerCase().includes(searchLower) ||
        event.speakers.toLowerCase().includes(searchLower)
      );
    }

    if (params.category && params.category !== 'All') {
      filteredEvents = filteredEvents.filter(event => 
        event.category === params.category
      );
    }

    if (params.sort) {
      filteredEvents.sort((a, b) => {
        let aValue: string | Date;
        let bValue: string | Date;

        switch (params.sort) {
          case 'date_start':
            aValue = new Date(a.date_start);
            bValue = new Date(b.date_start);
            break;
          case 'title':
            aValue = a.title;
            bValue = b.title;
            break;
          case 'category':
            aValue = a.category;
            bValue = b.category;
            break;
          default:
            aValue = new Date(a.createdAt);
            bValue = new Date(b.createdAt);
        }

        if (aValue instanceof Date && bValue instanceof Date) {
          return params.order === 'desc' 
            ? bValue.getTime() - aValue.getTime()
            : aValue.getTime() - bValue.getTime();
        }

        const comparison = String(aValue).localeCompare(String(bValue));
        return params.order === 'desc' ? -comparison : comparison;
      });
    }

    const total = filteredEvents.length;
    const start = (params.page - 1) * params.limit;
    const items = filteredEvents.slice(start, start + params.limit);
    const totalPages = Math.ceil(total / params.limit);

    return of({
      items,
      total,
      page: params.page,
      limit: params.limit,
      totalPages
    });
  }
}