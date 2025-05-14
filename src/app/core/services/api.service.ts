import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PaginationParams, PaginatedResponse } from '../models/pagination.model';
import { MockDbService } from './mock-db.service';
import { PageContent, PageType } from '../models/page.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private mockDb: MockDbService
  ) {}


  getList<T>(endpoint: string, params: PaginationParams): Observable<PaginatedResponse<T>> {
    let httpParams = new HttpParams()
      .set('page', params.page.toString())
      .set('limit', params.limit.toString());

    if (params.search) {
      httpParams = httpParams.set('search', params.search);
    }
    if (params.sort) {
      httpParams = httpParams.set('sort', params.sort);
    }
    if (params.order) {
      httpParams = httpParams.set('order', params.order);
    }

    console.log(`${this.apiUrl}/${endpoint}`);
    return this.http.get<PaginatedResponse<T>>(`${this.apiUrl}/${endpoint}`, { params: httpParams });
  }

  getDetail<T>(endpoint: string, id: string): Observable<T> {
    if (!environment.production) {
      switch (endpoint) {
        case 'news':
          return this.mockDb.getNewsDetail(id);
        case 'bibliography':
          return this.mockDb.getBibliographyDetail(id);
        default:
          throw new Error(`Unknown endpoint: ${endpoint}`);
      }
    }
    return this.http.get<T>(`${this.apiUrl}/${endpoint}/${id}`);
  }
}