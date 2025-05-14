import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PaginationParams, PaginatedResponse } from '../../core/models/pagination.model';

export interface AdminBibliographyEntry {
  id: string;
  title: string;
  author: string;
  year: number;
  type: 'book' | 'article' | 'conference' | 'thesis';
  description: string;
  status: 'draft' | 'published';
  createdAt: Date;
  updatedAt: Date;
}

export interface AdminBibliographyCreateInput {
  title: string;
  author: string;
  year: number;
  type: 'book' | 'article' | 'conference' | 'thesis';
  description: string;
  status: 'draft' | 'published';
}

export interface AdminBibliographyUpdateInput extends Partial<AdminBibliographyCreateInput> {}

@Injectable({
  providedIn: 'root'
})
export class AdminBibliographyService {
  private apiUrl = `${environment.apiUrl}/admin/bibliography`;

  constructor(private http: HttpClient) {}

  getList(params: PaginationParams): Observable<PaginatedResponse<AdminBibliographyEntry>> {
    return this.http.get<PaginatedResponse<AdminBibliographyEntry>>(this.apiUrl, { params: { ...params } as any });
  }

  getById(id: string): Observable<AdminBibliographyEntry> {
    return this.http.get<AdminBibliographyEntry>(`${this.apiUrl}/${id}`);
  }

  create(entry: AdminBibliographyCreateInput): Observable<AdminBibliographyEntry> {
    return this.http.post<AdminBibliographyEntry>(this.apiUrl, entry);
  }

  update(id: string, entry: AdminBibliographyUpdateInput): Observable<AdminBibliographyEntry> {
    return this.http.put<AdminBibliographyEntry>(`${this.apiUrl}/${id}`, entry);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateStatus(id: string, status: 'draft' | 'published'): Observable<AdminBibliographyEntry> {
    return this.http.patch<AdminBibliographyEntry>(`${this.apiUrl}/${id}/status`, { status });
  }
}