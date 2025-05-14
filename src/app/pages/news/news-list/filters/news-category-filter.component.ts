import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-category-filter',
  standalone: true,
  imports: [CommonModule],
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

    }
  `]
})
export class NewsCategoryFilterComponent {
  @Input() categories: { id: string; name: string; }[] = [
    { id: 'all', name: 'All Categories' },
    { id: 'technology', name: 'Technology' },
    { id: 'science', name: 'Science' },
    { id: 'research', name: 'Research' }
  ];
  @Input() selectedCategory: string = 'all';
  @Output() categoryChange = new EventEmitter<string>();

  onCategorySelect(categoryId: string) {
    this.categoryChange.emit(categoryId);
  }
}