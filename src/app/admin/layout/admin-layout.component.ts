import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminNavbarComponent } from './admin-navbar.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, AdminNavbarComponent],
  template: `
    <div class="admin-layout">
      <app-admin-navbar></app-admin-navbar>
      <div class="admin-content">
        <div class="container-fluid">
          <div class="row">
            <main class="col-md-12 px-4 py-4">
              <router-outlet></router-outlet>
            </main>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .admin-layout {
      min-height: 100vh;
      background-color: #f8f9fa;
      display: flex;
      flex-direction: column;
    }

    .admin-content {
      flex: 1;
      padding: 20px 0;
    }

    :host {
      display: block;
      height: 100vh;
    }
  `]
})
export class AdminLayoutComponent { }