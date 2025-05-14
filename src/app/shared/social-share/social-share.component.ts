import { Component, Input, AfterViewChecked } from '@angular/core';
import { NgClass } from '@angular/common'; // <--- Importa questo
import { Router } from '@angular/router';
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

  ngOnInit(): void {
    this.currentUrl = this.route.url;
    this.linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(this.currentUrl)}`;
    this.whatsappUrl = `https://wa.me/?text=${encodeURIComponent('Guarda questa pagina: ' + this.currentUrl)}`;
    this.facebookUrl = `https://www.facebook.com/sharer/sharer.php?u==${encodeURIComponent(this.currentUrl)}`;
  }

  constructor(private route: Router) { }

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