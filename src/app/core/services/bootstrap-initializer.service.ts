import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var bootstrap: any;

@Injectable({
  providedIn: 'root'
})
export class BootstrapInitializerService {
  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.initBootstrapComponents();
        window.scrollTo(0, 0); // Torna in alto ad ogni navigazione
      });
  }

  initBootstrapComponents(): void {
    // Tooltips
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
      new bootstrap.Tooltip(el);
    });

    // Popovers
    document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => {
      new bootstrap.Popover(el);
    });

    // Dropdowns
    document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach(el => {
      new bootstrap.Dropdown(el);
    });

    // Modals (opzionale, di solito gestiti via JS solo all’apertura)
    document.querySelectorAll('.modal').forEach(el => {
      new bootstrap.Modal(el);
    });

    // Offcanvas
    document.querySelectorAll('.offcanvas').forEach(el => {
      new bootstrap.Offcanvas(el);
    });

    // Collapse (es. menu hamburger)
    document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(el => {
      new bootstrap.Collapse(el, { toggle: false });
    });

    // Carousels
    document.querySelectorAll('.carousel').forEach(el => {
      new bootstrap.Carousel(el);
    });

    // Toasts
    document.querySelectorAll('.toast').forEach(el => {
      new bootstrap.Toast(el);
    });

    // ScrollSpy (richiede init via codice)
    document.querySelectorAll('[data-bs-spy="scroll"]').forEach(el => {
      new bootstrap.ScrollSpy(document.body, {
        target: el.getAttribute('data-bs-target') || '',
        offset: parseInt(el.getAttribute('data-bs-offset') || '10')
      });
    });
  }
}
