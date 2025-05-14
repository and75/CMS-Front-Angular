import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeroSectionComponent } from '../shared/hero-section/hero-section.component';

@Component({
    selector: 'app-home-layout',
    standalone: true,
    imports: [RouterOutlet, NavbarComponent, HeroSectionComponent, FooterComponent],
    template: `
    <div class="public-layout">
      <app-navbar></app-navbar>
      <app-hero-section></app-hero-section>
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
export class HomeLayoutComponent {}