import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PaginationParams, PaginatedResponse } from '../../core/models/pagination.model';

export interface AdminNetwork {
  id: string;
  label: string;
  url: string;
  category: 'cggg' | 'axe' | 'france' | 'international';
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

export interface AdminNetworkCreateInput {
  label: string;
  url: string;
  category: 'cggg' | 'axe' | 'france' | 'international';
  status: 'active' | 'inactive';
}

export interface AdminNetworkUpdateInput extends Partial<AdminNetworkCreateInput> {}

@Injectable({
  providedIn: 'root'
})
export class AdminNetworksService {
  private apiUrl = `${environment.apiUrl}/admin/networks`;

  constructor(private http: HttpClient) {}

  getList(params: PaginationParams): Observable<PaginatedResponse<AdminNetwork>> {
    return this.http.get<PaginatedResponse<AdminNetwork>>(this.apiUrl, { params: { ...params } as any });
  }

  getById(id: string): Observable<AdminNetwork> {
    return this.http.get<AdminNetwork>(`${this.apiUrl}/${id}`);
  }

  create(network: AdminNetworkCreateInput): Observable<AdminNetwork> {
    return this.http.post<AdminNetwork>(this.apiUrl, network);
  }

  update(id: string, network: AdminNetworkUpdateInput): Observable<AdminNetwork> {
    return this.http.put<AdminNetwork>(`${this.apiUrl}/${id}`, network);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateStatus(id: string, status: 'active' | 'inactive'): Observable<AdminNetwork> {
    return this.http.patch<AdminNetwork>(`${this.apiUrl}/${id}/status`, { status });
  }
}