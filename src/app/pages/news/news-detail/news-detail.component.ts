import { Component } from '@angular/core';
import { AsyncPipe, NgIf, DatePipe, CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NewsService } from '../../../core/services/news.service';
import { switchMap, tap } from 'rxjs';
import { LatestNewsComponent } from '../../../shared/latest-news/latest-news.component';
import { PageService } from '../../../core/services/page.service';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    NgIf,
    DatePipe,
    LatestNewsComponent
  ],
  templateUrl: `./news-detail.component.html`,
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent {

news$ = this.route.params.pipe(
  switchMap(params => 
    this.newsService.getBySlug(params['slug']).pipe(
      tap(news => {
        console.log(news)
        this.pageService.setPage({
          title: news?.title || '',
          content: news?.content || '',
          description: news?.excerpt || '',
          image: `${environment.routeMother}/assets/img/news-card.png`,
          imageWidth: +params['imageWidth'] || 0,
          imageHeight: +params['imageHeight'] || 0,
          imageType: params['imageType'] || ''
        }, params['slug']);
      })
    )
  )
);

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private pageService: PageService
  ) { }
}