import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-events-category-filter',
    imports: [CommonModule],
    standalone: true,
    template: `
    <div class="category-filter">
      <button 
        *ngFor="let category of categories"
        class="btn"
        [class.btn-primary]="selectedCategory === category.id"
        [class.btn-outline-primary]="selectedCategory !== category.id"
        (click)="onCategorySelect(category.id)">
        {{ category.name }}
      </button>
    </div>
  `,
    styles: [`
    .category-filter {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;

      .btn {
        &:hover {
          transform: translateY(-2px);
        }
      }
    }
  `]
})
export class EventsCategoryFilterComponent {
  @Input() categories: { id: string; name: string; }[] = [];
  @Input() selectedCategory: string = 'All';
  @Output() categoryChange = new EventEmitter<string>();

  onCategorySelect(categoryId: string) {
    this.categoryChange.emit(categoryId);
  }
}