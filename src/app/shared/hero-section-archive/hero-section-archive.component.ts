import { Component, Input } from '@angular/core';
import { PageService } from '../../core/services/page.service';
import { Router } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-hero-section-archive',
  standalone: true,
  templateUrl: './hero-section-archive.component.html',
  styleUrls: ['./hero-section-archive.component.scss']
})
export class HeroSectionArchiveComponent {

  constructor(private route: Router, private pageService: PageService) { }

  @Input() title: string = 'Archive';
  @Input() description: string = 'Browse through our collection of articles and resources';
  @Input() bgcolor: string = '#032549';

  currentUrl = '';
  linkedinUrl = '';
  whatsappUrl = '';
  facebookUrl = '';
  copied = false;

  ngOnInit(): void {

    // Get the current route path as the slug
  const urlSegments = this.route.url.split('/');
  const slug = urlSegments[1]; // 'post' in '/post'
  console.log('SLUG', slug);
    this.pageService.getPageContent(slug as any).subscribe(pageData => {
      this.title = pageData.title;
      this.description = pageData.description
    });

    this.currentUrl = this.route.url;
    this.linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.currentUrl)}`;
    this.whatsappUrl = `https://wa.me/?text=${encodeURIComponent('Guarda questa pagina: ' + this.currentUrl)}`;
    this.facebookUrl = `https://www.facebook.com/sharer/sharer.php?u==${encodeURIComponent(this.currentUrl)}`;
  }



  copyToClipboard(button: HTMLElement): void {
    navigator.clipboard.writeText(this.currentUrl).then(() => {

      // Distruggi eventuale tooltip esistente
      const existing = bootstrap.Tooltip.getInstance(button);
      if (existing) {
        existing.dispose();
      }

      button.setAttribute('data-bs-original-title', 'Link copiato!');
      button.setAttribute('data-bs-placement', 'top');

      // Crea nuovo tooltip
      const tooltip = new bootstrap.Tooltip(button, {
        trigger: 'manual'
      });

      tooltip.show();

      // Nascondi dopo 1.5 secondi
      setTimeout(() => {
        tooltip.hide();
      }, 1500);

    });
  }
}