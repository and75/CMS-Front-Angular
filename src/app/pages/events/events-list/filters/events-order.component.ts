import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-events-order',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <div class="d-flex gap-2 justify-content-md-end">
      <select 
        class="form-select" 
        [ngModel]="sort"
        (ngModelChange)="onSortChange($event)">
        <option value="">Sort by...</option>
        <option *ngFor="let option of sortOptions" [value]="option.value">
          {{ option.label }}
        </option>
      </select>
      
      <select 
        class="form-select" 
        [ngModel]="order"
        (ngModelChange)="onOrderChange($event)">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  `,
    styles: [`
    .form-select {
      min-width: 120px;
      max-width: 160px;
      &:focus {
        border-color: #3498db;
        box-shadow: 0 0 0 0.2rem rgba(52, 152, 219, 0.25);
      }
    }
  `]
})
export class EventsOrderComponent {
  @Input() sort: string = '';
  @Input() order: 'asc' | 'desc' = 'desc';
  @Input() sortOptions: { value: string; label: string; }[] = [];
  
  @Output() sortChange = new EventEmitter<string>();
  @Output() orderChange = new EventEmitter<'asc' | 'desc'>();

  onSortChange(value: string) {
    this.sortChange.emit(value);
  }

  onOrderChange(value: 'asc' | 'desc') {
    this.orderChange.emit(value);
  }
}