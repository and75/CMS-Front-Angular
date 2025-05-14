import { Injectable, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var particlesJS: any;

@Injectable({
  providedIn: 'root'
})
export class ExternalScriptLoaderService implements OnDestroy {
  private scrollListener: any;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.initScrollEvent();
      this.initParticles();
    }
  }

  private initScrollEvent(): void {
    if (!this.isBrowser) return;

    this.scrollListener = window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    });
  }

  initParticles(): void {
    if (!this.isBrowser) return;

    if (document.querySelector('#particles-js')) {
      particlesJS.load('particles-js', '/assets/data/particles.json', () => {
        console.log('callback - particles.js config loaded for particles-js');
      });
    }
    if (document.querySelector('#background-div')) {
      particlesJS.load('background-div', '/assets/data/particles.json', () => {
        console.log('callback - particles.js config loaded for background-div');
      });
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser && this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }
}