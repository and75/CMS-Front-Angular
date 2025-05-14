import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin-navbar',
    standalone:true,
    imports: [RouterLink, RouterLinkActive],
    template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/admin/dashboard">
          <i class="bi bi-shield-lock"></i> Admin Panel
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#adminNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="adminNavbar">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/admin/dashboard" routerLinkActive="active">
                <i class="bi bi-speedometer2"></i> Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/admin/news" routerLinkActive="active">
                <i class="bi bi-newspaper"></i> News
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/admin/events" routerLinkActive="active">
                <i class="bi bi-calendar-event"></i> Events
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/admin/bibliography" routerLinkActive="active">
                <i class="bi bi-book"></i> Bibliography
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/admin/networks" routerLinkActive="active">
                <i class="bi bi-diagram-3"></i> Networks
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/admin/resources" routerLinkActive="active">
                <i class="bi bi-files"></i> Resources
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/admin/team" routerLinkActive="active">
                <i class="bi bi-people"></i> Team
              </a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" class="btn btn-outline-light">
                <i class="bi bi-box-arrow-left"></i> Back to Site
              </a>
            </li>
            <li class="nav-item">
              <button class="nav-link" (click)="logout()">
                <i class="bi bi-box-arrow-right"></i> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
    styles: [`
    .navbar {
      padding: 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .navbar-brand {
      font-weight: 600;
      
      i {
        margin-right: 0.5rem;
      }
    }

    .nav-link {
      padding: 0.5rem 1rem;
      border: none;
      background: none;
      cursor: pointer;
      
      i {
        margin-right: 0.5rem;
      }
      
      &.active {
        background-color: rgba(255,255,255,0.1);
        border-radius: 4px;
      }
    }

    .btn-outline-light {
      &:hover {
        background-color: rgba(255,255,255,0.1);
      }
    }
  `]
})
export class AdminNavbarComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}