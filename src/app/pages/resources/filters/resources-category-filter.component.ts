import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ResourceFilter {
  value: string;
  label: string;
}

@Component({
  selector: 'app-resources-category-filter',
  standalone: true,
  imports: [CommonModule],
  template: `
<div class="category-filter">
      <button 
        *ngFor="let filter of filters" 
        class="btn"
        [class.btn-primary]="selectedFilter === filter.value"
        [class.btn-outline-primary]="selectedFilter !== filter.value"
        (click)="onFilterSelect(filter.value)">
        {{ filter.label }} 
      </button>
</div>
  `,
  styles: [`
     .category-filter {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;

    }
  `]
})
export class ResourcesCategoryFilterComponent {
  @Input() filters: ResourceFilter[] = [];
  @Input() selectedFilter: string = 'all';
  @Output() filterChange = new EventEmitter<string>();

  onFilterSelect(filter: string) {
    this.filterChange.emit(filter);
  }
}