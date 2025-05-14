// src/app/services/external-script-loader.service.ts
import { Injectable, OnDestroy } from '@angular/core';
declare var particlesJS: any;
@Injectable({
  providedIn: 'root'
})
export class ExternalScriptLoaderService implements OnDestroy {

    private scrollListener: any;
  
    constructor() {
      this.initScrollEvent();
      this.initParticles();
    }
  
    // Inizializza gli eventi di scroll
    private initScrollEvent(): void {
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
  
    // Inizializza particles.js
    initParticles(): void {
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
  
    // Pulisci l'evento scroll al momento della distruzione del servizio
    ngOnDestroy(): void {
      if (this.scrollListener) {
        window.removeEventListener('scroll', this.scrollListener);
      }
    }

}
