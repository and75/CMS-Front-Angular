import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../core/services/news.service';
import { BehaviorSubject, switchMap } from 'rxjs';
import { PaginationParams } from '../../core/models/pagination.model';
import { SocialShareComponent } from '../social-share/social-share.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-latest-news',
    standalone: true,
    imports: [CommonModule, SocialShareComponent, RouterLink],
    templateUrl: './latest-news.component.html'
})
export class LatestNewsComponent {

    @Input() bgcolor: string = '#032549';
    
    paginationParams$ = new BehaviorSubject<PaginationParams>({
        page: 1,
        limit: 3,
        search: '',
        sort: 'publishedAt',
        order: 'desc'
    });

    news$ = this.paginationParams$.pipe(
        switchMap(params => this.newsService.getList(params))
    );

    constructor(private newsService: NewsService) { }
}