import { Component } from '@angular/core';
import { AsyncPipe, NgIf, NgFor, NgClass, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResourcesService } from '../../core/services/resources.service';
import { ResourceItem } from '../../core/models/resources.model';
import { PaginationComponent } from '../../shared/pagination/pagination.component';
import { NgVarDirective } from '../../shared/ng-var.directive';
import { ResourcesSearchComponent } from './filters/resources-search.component';
import { ResourcesCategoryFilterComponent, ResourceFilter } from './filters/resources-category-filter.component';
import { ResourcesSortComponent, SortOption } from './filters/resources-sort.component';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PageService } from '../../core/services/page.service';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    NgIf,
    NgFor,
    NgClass,
    FormsModule,
    PaginationComponent,
    NgVarDirective,
    ResourcesSearchComponent,
    ResourcesCategoryFilterComponent,
    ResourcesSortComponent
  ],
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent {
  data$ = this.resourcesService.getResourcesData();
  selectedCategory: string = 'all';
  searchTerm: string = '';
  selectedSort: string = '';
  sortOrder: 'asc' | 'desc' = 'desc';
  itemsPerPage = 5;
  currentPage = 1;
  Math = Math;

  filters: ResourceFilter[] = [
    { value: 'all', label: 'All Resources' },
    { value: 'videos', label: 'Videos' },
    { value: 'documents', label: 'Documents' },
    { value: 'presentations', label: 'Presentations' },
    { value: 'datasets', label: 'Datasets' }
  ];

  sortOptions: SortOption[] = [
    { value: 'label', label: 'Title' },
    { value: 'category', label: 'Category' },
    { value: 'year', label: 'Year' }
  ];

  constructor(
    private resourcesService: ResourcesService,
    private pageService: PageService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(() => this.pageService.getPageBySlug('resources'))
    ).subscribe()
  }

  filterResources(resources: ResourceItem[], category: string, search: string): ResourceItem[] {
    let filtered = resources.filter(item =>
      (category === 'all' || item.category === category) &&
      (search === '' || item.label.toLowerCase().includes(search.toLowerCase()))
    );

    if (this.selectedSort) {
      filtered.sort((a, b) => {
        const aValue = a[this.selectedSort as keyof ResourceItem];
        const bValue = b[this.selectedSort as keyof ResourceItem];

        const comparison = String(aValue).localeCompare(String(bValue));
        return this.sortOrder === 'desc' ? -comparison : comparison;
      });
    }

    return filtered;
  }

  getAllResources(data: any): ResourceItem[] {
    return [
      ...data.videos,
      ...data.documents,
      ...data.presentations,
      ...data.datasets
    ];
  }

  getPaginatedResources(resources: ResourceItem[]): ResourceItem[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return resources.slice(start, start + this.itemsPerPage);
  }


  getCategoryClass(category: string): string[] {
    const classes = {
      videos: ['badge', 'bg-danger'],
      documents: ['badge', 'bg-primary'],
      presentations: ['badge', 'bg-success'],
      datasets: ['badge', 'bg-info']
    };
    return classes[category as keyof typeof classes] || ['badge', 'bg-secondary'];
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  onItemsPerPageChange(perPage: number) {
    this.itemsPerPage = perPage;
    this.currentPage = 1;
  }

  onFilterChange(category: string) {
    this.selectedCategory = category;
    this.currentPage = 1;
  }

  onSearchChange(term: string) {
    this.searchTerm = term;
    this.currentPage = 1;
  }

  onSortChange(sort: string) {
    this.selectedSort = sort;
  }

  onOrderChange(order: 'asc' | 'desc') {
    this.sortOrder = order;
  }
}