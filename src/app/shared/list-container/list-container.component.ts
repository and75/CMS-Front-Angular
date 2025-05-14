import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../pagination/pagination.component';
import { PaginationParams } from '../../core/models/pagination.model';

@Component({
    selector: 'app-list-container',
    standalone: true,
    imports: [CommonModule, PaginationComponent],
    template: `
    <div class="list-container">
      <div class="list-content">
        <ng-content></ng-content>
      </div>
      <app-pagination
        [currentPage]="currentPage"
        [itemsPerPage]="itemsPerPage"
        [totalItems]="totalItems"
        [totalPages]="totalPages"
        (pageChange)="onPageChange($event)"
        (itemsPerPageChange)="onItemsPerPageChange($event)">
      </app-pagination>
    </div>
  `
})
export class ListContainerComponent {
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 10;
  @Input() totalItems: number = 0;
  @Input() totalPages: number = 1;
  @Input() sortOptions: { value: string; label: string; }[] = [];
  @Output() paramsChange = new EventEmitter<PaginationParams>();

  private params: PaginationParams = {
    page: this.currentPage,
    limit: this.itemsPerPage,
    search: '',
    sort: '',
    order: 'desc'
  };

  onPageChange(page: number) {
    this.params = { ...this.params, page };
    this.paramsChange.emit(this.params);
  }

  onItemsPerPageChange(limit: number) {
    this.params = { ...this.params, limit, page: 1 };
    this.paramsChange.emit(this.params);
  }

  onSortChange(sort: string) {
    this.params = { ...this.params, sort };
    this.paramsChange.emit(this.params);
  }

  onOrderChange(order: 'asc' | 'desc') {
    this.params = { ...this.params, order };
    this.paramsChange.emit(this.params);
  }

  onSearchChange(search: string) {
    this.params = { ...this.params, search, page: 1 };
    this.paramsChange.emit(this.params);
  }
}