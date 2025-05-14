import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BibliographyData } from '../models/bibliography.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BibliographyService {
  private apiUrl = `${environment.apiUrl}/bibliography`;

  constructor(private http: HttpClient) {}

  getBibliographyData(): Observable<BibliographyData> {
    if (!environment.production) {
      return of(this.getMockData());
    }
    return this.http.get<BibliographyData>(this.apiUrl);
  }

  private getMockData(): BibliographyData {
    return {
      books: [
        {
          reference: "Complex Systems: A Comprehensive Guide",
          url: "https://example.com/book1",
          year: 2023,
          category: "books"
        },
        {
          reference: "Introduction to Network Theory",
          url: "https://example.com/book2",
          year: 2022,
          category: "books"
        }
      ],
      articles: [
        {
          reference: "Emergence in Complex Systems: A New Perspective",
          url: "https://example.com/article1",
          year: 2024,
          category: "articles"
        },
        {
          reference: "Network Analysis in Social Systems",
          url: "https://example.com/article2",
          year: 2023,
          category: "articles"
        }
      ],
      conferences: [
        {
          reference: "Proceedings of Complex Systems Conference 2023",
          url: "https://example.com/conf1",
          year: 2023,
          category: "conferences"
        },
        {
          reference: "International Symposium on Network Science",
          url: "https://example.com/conf2",
          year: 2022,
          category: "conferences"
        }
      ],
      theses: [
        {
          reference: "Complex Networks in Social Media Analysis",
          url: "https://example.com/thesis1",
          year: 2023,
          category: "theses"
        },
        {
          reference: "Emergence and Self-Organization in Urban Systems",
          url: "https://example.com/thesis2",
          year: 2022,
          category: "theses"
        }
      ]
    };
  }
}