import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface BibliographyFilter {
  value: string;
  label: string;
}

@Component({
  selector: 'app-bibliography-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="filters-section mb-4">
      <div class="filters-container">
        <!-- Search Input -->
           <div class="input-group search-input mt-2 mt-sm-0 mb-1 mb-sm-0">
        <span class="input-group-text"><i class="bi bi-search"></i></span>
          <input 
            type="text" 
            class="form-control" 
            placeholder="Search bibliography..." 
            [ngModel]="searchTerm"
            (ngModelChange)="onSearchChange($event)">
        </div>

        <!-- Category Filters -->
        <div class="btn-group" role="group">
          <button 
            *ngFor="let filter of filters" 
            class="btn"
            [class.btn-primary]="selectedFilter === filter.value"
            [class.btn-outline-primary]="selectedFilter !== filter.value"
            (click)="onFilterSelect(filter.value)">
            {{ filter.label }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .filters-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }

    .search-input {
      width: 300px;

      .form-control {
        &:focus {
          border-color: #3498db;
          box-shadow: 0 0 0 0.2rem rgba(52, 152, 219, 0.25);
        }
      }
    }
        .btn-group {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;

      &::-webkit-scrollbar {
        height: 4px;
      }

      &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 2px;
      }

      &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 2px;
      }

      .btn {
        padding: 0.5rem 1.5rem;
        white-space: nowrap;
      }
    }
    @media (max-width: 768px) {
      .filters-container {
        flex-direction: column;
      }

      .search-input {
        width: 100%;
      }

      .btn-group {
        width: 100%;
        justify-content: flex-start;
      }
    }
  `]
})
export class BibliographyFiltersComponent {
  @Input() filters: BibliographyFilter[] = [];
  @Input() selectedFilter: string = 'all';
  @Input() searchTerm: string = '';

  @Output() filterChange = new EventEmitter<string>();
  @Output() searchChange = new EventEmitter<string>();

  onFilterSelect(filter: string) {
    this.filterChange.emit(filter);
  }

  onSearchChange(term: string) {
    this.searchChange.emit(term);
  }
}