import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent { }