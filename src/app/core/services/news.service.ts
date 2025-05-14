import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { ApiService } from './api.service';
import { PaginationParams, PaginatedResponse } from '../models/pagination.model';
import { Post, ContentStatus } from '../models/post.model';
import { environment } from '../../../environments/environment';
import { mockPosts } from '../mock/news.mock-db';

export interface NewsParams extends PaginationParams {
  category?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private apiService: ApiService) {}

  getList(params: NewsParams): Observable<PaginatedResponse<Post>> {
    if (!environment.production) {
      return this.getMockPosts(params);
    }
    return this.apiService.getList<Post>('posts', params).pipe(
      tap(res=>{
        console.log(res);
      })
    );
  }

  getDetail(id: string): Observable<Post> {
    if (!environment.production) {
      return of(mockPosts.find(post => post.id === id)!);
    }
    return this.apiService.getDetail<Post>('posts', id);
  }

  getBySlug(slug: string): Observable<Post> {
    if (!environment.production) {
      return of(mockPosts.find(post => post.slug === slug)!);
    }
    return this.apiService.getDetail<Post>('posts', `by-slug/${slug}`);
  }

  getAdjacentPosts(currentSlug: string): { previous: Post | null; next: Post | null } {
    if (!environment.production) {
      const currentIndex = mockPosts.findIndex(post => post.slug === currentSlug);
      return {
        previous: currentIndex > 0 ? mockPosts[currentIndex - 1] : null,
        next: currentIndex < mockPosts.length - 1 ? mockPosts[currentIndex + 1] : null
      };
    }
    return { previous: null, next: null };
  }



  private getMockPosts(params: NewsParams): Observable<PaginatedResponse<Post>> {
    let filteredPosts = [...mockPosts];

    if (params.search) {
      const searchLower = params.search.toLowerCase();
      filteredPosts = filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchLower) ||
        post.content.toLowerCase().includes(searchLower)
      );
    }

    if (params.category && params.category !== 'all') {
      filteredPosts = filteredPosts.filter(post => 
        post.categories.some(cat => cat.slug === params.category)
      );
    }

    if (params.sort) {
      filteredPosts.sort((a, b) => {
        let aValue: string | number | Date | undefined;
        let bValue: string | number | Date | undefined;

        switch (params.sort) {
          case 'title':
            aValue = a.title;
            bValue = b.title;
            break;
          case 'publishedAt':
            aValue = a.publishedAt;
            bValue = b.publishedAt;
            break;
          case 'status':
            aValue = a.status;
            bValue = b.status;
            break;
          default:
            aValue = a.createdAt;
            bValue = b.createdAt;
        }

        if (aValue === undefined && bValue === undefined) return 0;
        if (aValue === undefined) return 1;
        if (bValue === undefined) return -1;

        if (aValue instanceof Date && bValue instanceof Date) {
          return params.order === 'desc' 
            ? bValue.getTime() - aValue.getTime()
            : aValue.getTime() - bValue.getTime();
        }

        const comparison = String(aValue).localeCompare(String(bValue));
        return params.order === 'desc' ? -comparison : comparison;
      });
    }

    const total = filteredPosts.length;
    const start = (params.page - 1) * params.limit;
    const items = filteredPosts.slice(start, start + params.limit);
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