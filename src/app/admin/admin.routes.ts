import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { NewsListComponent } from './news/news-list.component';
import { NewsFormComponent } from './news/news-form.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsFormComponent } from './events/events-form.component';
import { BibliographyListComponent } from './bibliography/bibliography-list.component';
import { BibliographyFormComponent } from './bibliography/bibliography-form.component';
import { NetworksListComponent } from './networks/networks-list.component';
import { NetworksFormComponent } from './networks/networks-form.component';
import { ResourcesListComponent } from './resources/resources-list.component';
import { ResourcesFormComponent } from './resources/resources-form.component';
import { TeamListComponent } from './team/team-list.component';
import { TeamFormComponent } from './team/team-form.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthLayoutComponent } from './auth/layout/auth-layout.component';
import { LoginComponent } from './auth/login/login.component';

export const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'news', component: NewsListComponent },
      { path: 'news/create', component: NewsFormComponent },
      { path: 'news/edit/:id', component: NewsFormComponent },
      { path: 'events', component: EventsListComponent },
      { path: 'events/create', component: EventsFormComponent },
      { path: 'events/edit/:id', component: EventsFormComponent },
      { path: 'bibliography', component: BibliographyListComponent },
      { path: 'bibliography/create', component: BibliographyFormComponent },
      { path: 'bibliography/edit/:id', component: BibliographyFormComponent },
      { path: 'networks', component: NetworksListComponent },
      { path: 'networks/create', component: NetworksFormComponent },
      { path: 'networks/edit/:id', component: NetworksFormComponent },
      { path: 'resources', component: ResourcesListComponent },
      { path: 'resources/create', component: ResourcesFormComponent },
      { path: 'resources/edit/:id', component: ResourcesFormComponent },
      { path: 'team', component: TeamListComponent },
      { path: 'team/create', component: TeamFormComponent },
      { path: 'team/edit/:id', component: TeamFormComponent }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  }
];