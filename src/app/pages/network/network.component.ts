import { Component } from '@angular/core';
import { AsyncPipe, NgIf, NgFor } from '@angular/common';
import { NetworkService } from '../../core/services/network.service';
import { NetworkItem, NetworkFilter, NetworkSection, NetworkData } from '../../core/models/network.model';
import { NetworkFiltersComponent } from './filters/network-filters.component';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PageService } from '../../core/services/page.service';

@Component({
  selector: 'app-network',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor, NetworkFiltersComponent],
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent {

  data$ = this.networkService.getNetworkData();
  selectedFilter: NetworkSection = 'all';
  searchTerm: string = '';

  filters: NetworkFilter[] = [
    { value: 'all', label: 'All Networks' },
    { value: 'cggg', label: 'CGGG Members' },
    { value: 'axe', label: 'Research Axes' },
    { value: 'france', label: 'French Network' },
    { value: 'international', label: 'International' }
  ];

  constructor(
    private networkService: NetworkService,
    private pageService: PageService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap(() => this.pageService.getPageBySlug('network'))
    ).subscribe()
  }

  onFilterChange(filter: NetworkSection) {
    this.selectedFilter = filter;
  }

  onSearch(term: string) {
    this.searchTerm = term;
  }

  shouldShowSection(section: keyof NetworkData): boolean {
    return this.selectedFilter === 'all' || this.selectedFilter === section;
  }

  filterItems(items: NetworkItem[]): NetworkItem[] {
    if (!this.searchTerm) {
      return items;
    }
    const searchLower = this.searchTerm.toLowerCase();
    return items.filter(item =>
      item.label.toLowerCase().includes(searchLower)
    );
  }

  hasResults(data: NetworkData): boolean {
    const sections: (keyof NetworkData)[] = ['cggg', 'axe', 'france', 'international'];
    return sections.some(section => {
      const items = data[section];
      return this.shouldShowSection(section) && this.filterItems(items).length > 0;
    });
  }
}