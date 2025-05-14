import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pagination',
    standalone: true,
    imports: [CommonModule],
    template: `
    <nav aria-label="Page navigation" *ngIf="totalPages > 1">
      <ul class="pagination justify-content-end pt-4">
        <!-- Previous button -->
        <li class="page-item" [class.disabled]="currentPage === 1">
          <button class="page-link" 
                  (click)="onPageChange(currentPage - 1)"
                  [disabled]="currentPage === 1"
                  aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>

        <!-- First page -->
        <li class="page-item" [class.active]="currentPage === 1">
          <button class="page-link" (click)="onPageChange(1)">1</button>
        </li>

        <!-- Left ellipsis -->
        <li class="page-item disabled" *ngIf="startPage > 2">
          <span class="page-link">...</span>
        </li>

        <!-- Page numbers -->
        <li class="page-item" 
            *ngFor="let page of pages" 
            [class.active]="currentPage === page">
          <button class="page-link" (click)="onPageChange(page)">{{ page }}</button>
        </li>

        <!-- Right ellipsis -->
        <li class="page-item disabled" *ngIf="endPage < totalPages - 1">
          <span class="page-link">...</span>
        </li>

        <!-- Last page -->
        <li class="page-item" 
            *ngIf="totalPages > 1"
            [class.active]="currentPage === totalPages">
          <button class="page-link" (click)="onPageChange(totalPages)">
            {{ totalPages }}
          </button>
        </li>

        <!-- Next button -->
        <li class="page-item" [class.disabled]="currentPage === totalPages">
          <button class="page-link" 
                  (click)="onPageChange(currentPage + 1)"
                  [disabled]="currentPage === totalPages"
                  aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>

      <!-- Items per page selector -->
      <!-- <div class="d-flex justify-content-center align-items-center mt-2">
        <label class="me-2">Items per page:</label>
        <select class="form-select form-select-sm w-auto" 
                (change)="onItemsPerPageChange($event)"
                [value]="itemsPerPage">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </div> -->
    </nav>
  `,
    styles: [``]
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 10;
  @Input() totalItems: number = 0;
  @Input() totalPages: number = 1;
  @Output() pageChange = new EventEmitter<number>();
  @Output() itemsPerPageChange = new EventEmitter<number>();

  pages: number[] = [];
  startPage: number = 1;
  endPage: number = 1;
  maxPages: number = 5;

  ngOnChanges() {
    this.calculatePages();
  }

  calculatePages() {
    if (this.totalPages <= this.maxPages) {
      this.startPage = 2;
      this.endPage = this.totalPages - 1;
    } else {
      const maxPagesBeforeCurrentPage = Math.floor(this.maxPages / 2);
      const maxPagesAfterCurrentPage = Math.ceil(this.maxPages / 2) - 1;

      if (this.currentPage <= maxPagesBeforeCurrentPage) {
        this.startPage = 2;
        this.endPage = this.maxPages - 1;
      } else if (this.currentPage + maxPagesAfterCurrentPage >= this.totalPages) {
        this.startPage = this.totalPages - this.maxPages + 2;
        this.endPage = this.totalPages - 1;
      } else {
        this.startPage = this.currentPage - maxPagesBeforeCurrentPage + 1;
        this.endPage = this.currentPage + maxPagesAfterCurrentPage;
      }
    }

    this.pages = Array.from({ length: this.endPage - this.startPage + 1 }, 
                           (_, i) => this.startPage + i);
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.pageChange.emit(page);
    }
  }

  onItemsPerPageChange(event: Event) {
    const value = parseInt((event.target as HTMLSelectElement).value);
    this.itemsPerPageChange.emit(value);
  }
}