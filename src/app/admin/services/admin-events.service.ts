import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PaginationParams, PaginatedResponse } from '../../core/models/pagination.model';

export interface AdminEvent {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  location?: string;
  status: 'draft' | 'published';
  createdAt: Date;
  updatedAt: Date;
}

export interface AdminEventCreateInput {
  title: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  location?: string;
  status: 'draft' | 'published';
}

export interface AdminEventUpdateInput extends Partial<AdminEventCreateInput> {}

@Injectable({
  providedIn: 'root'
})
export class AdminEventsService {
  private apiUrl = `${environment.apiUrl}/admin/events`;

  constructor(private http: HttpClient) {}

  getList(params: PaginationParams): Observable<PaginatedResponse<AdminEvent>> {
    return this.http.get<PaginatedResponse<AdminEvent>>(this.apiUrl, { params: { ...params } as any });
  }

  getById(id: string): Observable<AdminEvent> {
    return this.http.get<AdminEvent>(`${this.apiUrl}/${id}`);
  }

  create(event: AdminEventCreateInput): Observable<AdminEvent> {
    return this.http.post<AdminEvent>(this.apiUrl, event);
  }

  update(id: string, event: AdminEventUpdateInput): Observable<AdminEvent> {
    return this.http.put<AdminEvent>(`${this.apiUrl}/${id}`, event);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateStatus(id: string, status: 'draft' | 'published'): Observable<AdminEvent> {
    return this.http.patch<AdminEvent>(`${this.apiUrl}/${id}/status`, { status });
  }
}