import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewsListComponent } from './pages/news/news-list/news-list.component';
import { NewsDetailComponent } from './pages/news/news-detail/news-detail.component';
import { EventsListComponent } from './pages/events/events-list/events-list.component';
import { EventsDetailComponent } from './pages/events/events-detail/events-detail.component';
import { TeamDetailComponent } from './pages/team/team-detail/team-detail.component';
import { BibliographyComponent } from './pages/bibliography/bibliography.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { NetworkComponent } from './pages/network/network.component';
import { adminRoutes } from './admin/admin.routes';
import { PublicLayoutComponent } from './layout/public-layout.component';
import { AuthLayoutComponent } from './admin/auth/layout/auth-layout.component';
import { LoginComponent } from './admin/auth/login/login.component';
import { HomeLayoutComponent } from './layout/home-layout.component';

export const routes: Routes = [
    {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
    ]
  },
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent},
      { path: 'contact', component: ContactComponent },
      { path: 'news', component: NewsListComponent },
      { path: 'news/:slug', component: NewsDetailComponent },
      { path: 'events', component: EventsListComponent },
      { path: 'events/:slug', component: EventsDetailComponent },
      { path: 'team/:slug', component: TeamDetailComponent },
      { path: 'bibliography', component: BibliographyComponent },
      { path: 'resources', component: ResourcesComponent },
      { path: 'network', component: NetworkComponent }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  },
  ...adminRoutes
];