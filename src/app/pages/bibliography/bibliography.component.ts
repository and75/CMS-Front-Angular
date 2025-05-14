import { Component } from '@angular/core';
import { AsyncPipe, NgIf, NgFor } from '@angular/common';
import { BibliographyService } from '../../core/services/bibliography.service';
import { HeroSectionArchiveComponent } from '../../shared/hero-section-archive/hero-section-archive.component';
import { map, switchMap } from 'rxjs';
import { BibliographyItem } from '../../core/models/bibliography.model';
import { PaginationComponent } from '../../shared/pagination/pagination.component';
import { NgVarDirective } from '../../shared/ng-var.directive';
import { BibliographyFiltersComponent, BibliographyFilter } from './filters/bibliography-filters.component';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../../core/services/page.service';

interface SectionData {
  title: string;
  items: BibliographyItem[];
  totalItems: number;
  section: string;
}

@Component({
  selector: 'app-bibliography',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgFor,
    PaginationComponent,
    BibliographyFiltersComponent
],
  templateUrl: './bibliography.component.html',
  styleUrls: ['./bibliography.component.scss']
})
export class BibliographyComponent {
  itemsPerPage = 5;
  currentPage = 1;
  Math = Math;
  selectedFilter: string = 'all';
  searchTerm: string = '';

  filters: BibliographyFilter[] = [
    { value: 'all', label: 'All' },
    { value: 'books', label: 'Books' },
    { value: 'articles', label: 'Articles' },
    { value: 'conferences', label: 'Conferences' },
    { value: 'theses', label: 'Theses' }
  ];

  data$ = this.bibliographyService.getBibliographyData().pipe(
    map(data => {
      const sections = ['books', 'articles', 'conferences', 'theses'] as const;
      return sections.map(section => ({
        title: this.getSectionTitle(section),
        items: this.filterItems(data[section]),
        totalItems: data[section].length,
        section
      }));
    })
  );

  constructor(
    private bibliographyService: BibliographyService ,
    private pageService: PageService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(() => this.pageService.getPageBySlug('bibliography'))
    ).subscribe()
  }

  private getSectionTitle(section: string): string {
    const titles: Record<string, string> = {
      books: 'Books',
      articles: 'Articles',
      conferences: 'Conference Papers',
      theses: 'Theses'
    };
    return titles[section] || section;
  }

  private filterItems(items: BibliographyItem[]): BibliographyItem[] {
    if (!this.searchTerm && this.selectedFilter === 'all') {
      return this.paginateItems(items, this.currentPage, this.itemsPerPage);
    }

    const filtered = items.filter(item => {
      const matchesSearch = !this.searchTerm || 
        item.reference.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesFilter = this.selectedFilter === 'all' || 
        item.category === this.selectedFilter;
      
      return matchesSearch && matchesFilter;
    });

    return this.paginateItems(filtered, this.currentPage, this.itemsPerPage);
  }

  private paginateItems(items: BibliographyItem[], page: number, perPage: number): BibliographyItem[] {
    const start = (page - 1) * perPage;
    return items.slice(start, start + perPage);
  }

  hasResults(sections: SectionData[]): boolean {
    return sections.some(section => section.items.length > 0);
  }

  onPageChange(page: number, section: string) {
    this.currentPage = page;
    this.data$ = this.bibliographyService.getBibliographyData().pipe(
      map(data => {
        const sections = ['books', 'articles', 'conferences', 'theses'] as const;
        return sections.map(s => ({
          title: this.getSectionTitle(s),
          items: this.filterItems(data[s]),
          totalItems: data[s].length,
          section: s
        }));
      })
    );
  }

  onItemsPerPageChange(perPage: number, section: string) {
    this.itemsPerPage = perPage;
    this.currentPage = 1;
    this.onPageChange(1, section);
  }

  onFilterChange(filter: string) {
    this.selectedFilter = filter;
    this.currentPage = 1;
    this.data$ = this.bibliographyService.getBibliographyData().pipe(
      map(data => {
        const sections = ['books', 'articles', 'conferences', 'theses'] as const;
        return sections.map(section => ({
          title: this.getSectionTitle(section),
          items: this.filterItems(data[section]),
          totalItems: data[section].length,
          section
        }));
      })
    );
  }

  onSearchChange(term: string) {
    this.searchTerm = term;
    this.currentPage = 1;
    this.data$ = this.bibliographyService.getBibliographyData().pipe(
      map(data => {
        const sections = ['books', 'articles', 'conferences', 'theses'] as const;
        return sections.map(section => ({
          title: this.getSectionTitle(section),
          items: this.filterItems(data[section]),
          totalItems: data[section].length,
          section
        }));
      })
    );
  }
}