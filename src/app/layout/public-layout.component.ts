import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeroSectionArchiveComponent } from '../shared/hero-section-archive/hero-section-archive.component';

@Component({
    selector: 'app-public-layout',
    standalone: true,
    imports: [RouterOutlet, NavbarComponent, HeroSectionArchiveComponent, FooterComponent],
    template: `
    <div class="public-layout">
      <app-navbar></app-navbar>
      <app-hero-section-archive></app-hero-section-archive>
      <main class="main-content">
          <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
    styles: [`
    .public-layout {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .main-content {
      flex: 1;
    }
  `]
})
export class PublicLayoutComponent {}