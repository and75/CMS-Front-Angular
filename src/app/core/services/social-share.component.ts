import { Component, Input, Inject, PLATFORM_ID } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-social-share',
  standalone: true,
  imports: [NgClass],
  template: `
    <div>
        <a href="{{linkedinUrl}}" target="_blank" class="btn btn-sm me-2" [ngClass]="buttonStyle">
          <i class="bi bi-linkedin"></i>
        </a>
        <a href="{{facebookUrl}}" target="_blank" class="btn btn-sm me-2" [ngClass]="buttonStyle">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="{{whatsappUrl}}" target="_blank" class="btn btn-sm" [ngClass]="buttonStyle">
          <i class="bi bi-whatsapp"></i>
        </a>
    </div>
  `,
  styles: [``]
})
export class SocialShareComponent {
  @Input() currentUrl: string = '';
  @Input() buttonStyle: string = 'btn-outline-primary';

  linkedinUrl = '';
  whatsappUrl = '';
  facebookUrl = '';
  copied = false;
  private isBrowser: boolean;

  constructor(
    private route: Router,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.currentUrl = this.route.url;
    this.linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.currentUrl)}`;
    this.whatsappUrl = `https://wa.me/?text=${encodeURIComponent('Guarda questa pagina: ' + this.currentUrl)}`;
    this.facebookUrl = `https://www.facebook.com/sharer/sharer.php?u==${encodeURIComponent(this.currentUrl)}`;
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