import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PaginationParams, PaginatedResponse } from '../models/pagination.model';
import { PageContent, PageType } from '../models/page.model';

@Injectable({
  providedIn: 'root'
})
export class MockDbService {
  private mockNews = Array.from({ length: 50 }, (_, i) => ({
    id: `${i + 1}`,
    title: `News Article ${i + 1}`,
    content: `This is the content for news article ${i + 1}. It includes detailed information about the news topic.`,
    summary: `Brief summary of news article ${i + 1}`,
    date: new Date(2024, 0, i + 1).toISOString(),
    author: `Author ${i + 1}`,
    category: ['Technology', 'Science', 'Research', 'Events'][i % 4],
    tags: [`tag${i}`, `tag${i + 1}`],
    status: i % 3 === 0 ? 'published' : 'draft',
    imageUrl: `https://picsum.photos/seed/${i}/800/400`
  }));

  private mockBibliography = Array.from({ length: 50 }, (_, i) => ({
    id: `${i + 1}`,
    title: `Bibliography Entry ${i + 1}`,
    author: `Author ${i + 1}`,
    year: 2020 + Math.floor(i / 10),
    type: ['book', 'article', 'conference', 'thesis'][i % 4],
    description: `Description for bibliography entry ${i + 1}`,
    status: i % 3 === 0 ? 'published' : 'draft'
  }));

  

  private paginateData<T extends Record<string, unknown>>(data: T[], params: PaginationParams): PaginatedResponse<T> {
    let filteredData = [...data];

    if (params.search) {
      const searchLower = params.search.toLowerCase();
      filteredData = filteredData.filter(item => 
        Object.values(item).some(value => 
          String(value).toLowerCase().includes(searchLower)
        )
      );
    }

    if (params.sort && params.sort in filteredData[0]) {
      filteredData.sort((a, b) => {
        const aValue = String(a[params.sort!]);
        const bValue = String(b[params.sort!]);
        const comparison = aValue.localeCompare(bValue);
        return params.order === 'desc' ? -comparison : comparison;
      });
    }

    const total = filteredData.length;
    const start = (params.page - 1) * params.limit;
    const items = filteredData.slice(start, start + params.limit);
    const totalPages = Math.ceil(total / params.limit);

    return {
      items,
      total,
      page: params.page,
      limit: params.limit,
      totalPages
    };
  }

  getNewsList(params: PaginationParams): Observable<PaginatedResponse<any>> {
    return of(this.paginateData(this.mockNews, params)).pipe(delay(300));
  }

  getBibliographyList(params: PaginationParams): Observable<PaginatedResponse<any>> {
    return of(this.paginateData(this.mockBibliography, params)).pipe(delay(300));
  }

  getNewsDetail(id: string): Observable<any> {
    const item = this.mockNews.find(n => n.id === id);
    return of(item).pipe(delay(300));
  }

  getBibliographyDetail(id: string): Observable<any> {
    const item = this.mockBibliography.find(b => b.id === id);
    return of(item).pipe(delay(300));
  }
}