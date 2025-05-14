import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PaginationParams, PaginatedResponse } from '../../core/models/pagination.model';

export interface AdminResource {
  id: string;
  label: string;
  url: string;
  year: number;
  category: 'videos' | 'documents' | 'presentations' | 'datasets';
  youtubeUrl?: string;
  thumbnail?: string;
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

export interface AdminResourceCreateInput {
  label: string;
  url: string;
  year: number;
  category: 'videos' | 'documents' | 'presentations' | 'datasets';
  youtubeUrl?: string;
  thumbnail?: string;
  status: 'active' | 'inactive';
}

export interface AdminResourceUpdateInput extends Partial<AdminResourceCreateInput> {}

@Injectable({
  providedIn: 'root'
})
export class AdminResourcesService {
  private apiUrl = `${environment.apiUrl}/admin/resources`;

  constructor(private http: HttpClient) {}

  getList(params: PaginationParams): Observable<PaginatedResponse<AdminResource>> {
    return this.http.get<PaginatedResponse<AdminResource>>(this.apiUrl, { params: { ...params } as any });
  }

  getById(id: string): Observable<AdminResource> {
    return this.http.get<AdminResource>(`${this.apiUrl}/${id}`);
  }

  create(resource: AdminResourceCreateInput): Observable<AdminResource> {
    return this.http.post<AdminResource>(this.apiUrl, resource);
  }

  update(id: string, resource: AdminResourceUpdateInput): Observable<AdminResource> {
    return this.http.put<AdminResource>(`${this.apiUrl}/${id}`, resource);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateStatus(id: string, status: 'active' | 'inactive'): Observable<AdminResource> {
    return this.http.patch<AdminResource>(`${this.apiUrl}/${id}/status`, { status });
  }
}