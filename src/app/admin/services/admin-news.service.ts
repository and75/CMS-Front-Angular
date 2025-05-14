import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Post, ContentStatus } from '../../core/models/post.model';
import { PaginationParams, PaginatedResponse } from '../../core/models/pagination.model';

@Injectable({
  providedIn: 'root'
})
export class AdminNewsService {
  private apiUrl = `${environment.apiUrl}/admin/news`;

  constructor(private http: HttpClient) {}

  getList(params: PaginationParams): Observable<PaginatedResponse<Post>> {
    return this.http.get<PaginatedResponse<Post>>(this.apiUrl, { params: { ...params } as any });
  }

  getById(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  create(post: Partial<Post>): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }

  update(id: string, post: Partial<Post>): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${id}`, post);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateStatus(id: string, status: ContentStatus): Observable<Post> {
    return this.http.patch<Post>(`${this.apiUrl}/${id}/status`, { status });
  }
}