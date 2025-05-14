import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface SortOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-resources-sort',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="input-group">
      <select 
        class="form-select" 
        [ngModel]="selectedSort"
        (ngModelChange)="onSortChange($event)">
        <option value="">Sort by...</option>
        <option *ngFor="let option of sortOptions" [value]="option.value">
          {{ option.label }}
        </option>
      </select>
      
      <select 
        class="form-select" 
        [ngModel]="sortOrder"
        (ngModelChange)="onOrderChange($event)">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  `,
  styles: [`
    .form-select {
      min-width: 100px;
      
      &:focus {
        border-color: #3498db;
        box-shadow: 0 0 0 0.2rem rgba(52, 152, 219, 0.25);
      }
    }
  `]
})
export class ResourcesSortComponent {
  @Input() sortOptions: SortOption[] = [];
  @Input() selectedSort: string = '';
  @Input() sortOrder: 'asc' | 'desc' = 'desc';

  @Output() sortChange = new EventEmitter<string>();
  @Output() orderChange = new EventEmitter<'asc' | 'desc'>();

  onSortChange(sort: string) {
    this.sortChange.emit(sort);
  }

  onOrderChange(order: 'asc' | 'desc') {
    this.orderChange.emit(order);
  }
}