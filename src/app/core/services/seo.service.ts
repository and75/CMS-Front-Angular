import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  updateTitle(title: string) {
    if (!title) return;
    this.title.setTitle(`${title} | t-co.re`);
  }

  updateDescription(description: string) {
    if (!description) return;
    this.meta.updateTag({ name: 'description', content: description });
  }

  updateMetaTags(tags: { [key: string]: string }) {
    if (!tags) return;
    
    Object.entries(tags).forEach(([key, content]) => {
      if (!content) return;

      // Update OpenGraph tags
      if (key.startsWith('og:')) {
        this.meta.updateTag({ property: key, content });
      }
      // Update Twitter tags
      else if (key.startsWith('twitter:')) {
        this.meta.updateTag({ name: key, content });
      }
      // Update regular meta tags
      else {
        this.meta.updateTag({ name: key, content });
      }
    });
  }
}