import { Injectable } from '@angular/core';
import { Observable, of, shareReplay, tap, map } from 'rxjs';
import { mockPages } from '../mock/page.mock-db';
import { SeoService } from './seo.service';
import { PageContent, PageType } from '../models/page.model';
import { environment } from '../../../environments/environment';

export interface PageData {
  title: string;
  description: string;
  metaTags?: { [key: string]: string };
}

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private pageCache = new Map<string, Observable<PageData>>();

  constructor(private seoService: SeoService) { }

  setPage(page:any, slug:string){
    const pageData = this.transformToPageData(page, `/${slug}`)
    this.updateSeo(pageData);
  }

  getPageBySlug(slug: string): Observable<PageData> {
    console.log('Getting page data for:', slug);

    // Check cache first
    if (this.pageCache.has(slug)) {
      console.log('Returning cached data for:', slug);
      return this.pageCache.get(slug)!;
    }

    // Fetch and cache the page data
    const pageData$ = of(mockPages[slug as PageType]).pipe(
      tap(page => {
        if (!page) {
          console.warn('No page data found for:', slug);
          return;
        }
        console.log('Found page data:', page);

        const pageData = this.transformToPageData(page, `/${slug}`);
        this.updateSeo(pageData);
      }),
      map(page => this.transformToPageData(page, `/${slug}`)),
      shareReplay(1)
    );

    this.pageCache.set(slug, pageData$);
    return pageData$;
  }

  getPageContent(page: PageType): Observable<PageContent> {
    return of(mockPages[page]).pipe();
  }

  private updateSeo(pageData: PageData) {
    if (!pageData) {
      console.warn('No page data to update SEO');
      return;
    }

    console.log('Updating SEO with:', pageData);
    this.seoService.updateTitle(pageData.title);
    this.seoService.updateDescription(pageData.description);

    if (pageData.metaTags) {
      this.seoService.updateMetaTags(pageData.metaTags);
    }

  }

  private transformToPageData(page: PageContent, url: string): PageData {
    if (!page) return { title: '', description: '' };

    const baseUrl = environment.routeMother; // Replace with your actual domain
    const fullUrl = `${baseUrl}${url}`;

    return {
      title: page.title,
      description: page.description,
      metaTags: {
        'og:title': page.title,
        'og:description': page.description,
        'og:url': fullUrl,
        'og:type': 'website',
        'og:site_name': 't-co.re.',
        'og:image': page.image,
        'og:image:type': page.imageType,
        "og:image:width": "1200",
        "og:image:height": "630",
        'twitter:card': 'summary_large_image',
        'twitter:title': page.title,
        'twitter:image': page.image,
        'twitter:description': page.description,
        'twitter:url': fullUrl
      }
    };
  }
}