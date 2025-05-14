// src/app/shared/hero-section-archive/hero-section-archive.component.ts
import { Component, Input, Inject, PLATFORM_ID } from '@angular/core';
import { PageService } from '../../core/services/page.service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-hero-section-archive',
  standalone: true,
  templateUrl: './hero-section-archive.component.html',
  styleUrls: ['./hero-section-archive.component.scss']
})
export class HeroSectionArchiveComponent {
  constructor(
    private route: Router,
    private pageService: PageService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  @Input() title: string = 'Archive';
  @Input() description: string = 'Browse through our collection of articles and resources';
  @Input() bgcolor: string = '#032549';

  currentUrl = '';
  linkedinUrl = '';
  whatsappUrl = '';
  facebookUrl = '';
  copied = false;
  private isBrowser = isPlatformBrowser(this.platformId);

  ngOnInit(): void {
    const urlSegments = this.route.url.split('/');
    const slug = urlSegments[1];
    console.log('SLUG', slug);
    
    this.pageService.getPageContent(slug as any).subscribe(pageData => {
      this.title = pageData.title;
      this.description = pageData.description;
    });

    if (this.isBrowser) {
      this.currentUrl = this.route.url;
      this.linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.currentUrl)}`;
      this.whatsappUrl = `https://wa.me/?text=${encodeURIComponent('Guarda questa pagina: ' + this.currentUrl)}`;
      this.facebookUrl = `https://www.facebook.com/sharer/sharer.php?u==${encodeURIComponent(this.currentUrl)}`;
    }
  }

  copyToClipboard(button: HTMLElement): void {
    if (!this.isBrowser) return;

    navigator.clipboard.writeText(this.currentUrl).then(() => {
      const existing = bootstrap.Tooltip.getInstance(button);
      if (existing) {
        existing.dispose();
      }

      button.setAttribute('data-bs-original-title', 'Link copiato!');
      button.setAttribute('data-bs-placement', 'top');

      const tooltip = new bootstrap.Tooltip(button, {
        trigger: 'manual'
      });

      tooltip.show();

      setTimeout(() => {
        tooltip.hide();
      }, 1500);
    });
  }
}
