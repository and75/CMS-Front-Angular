import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resources-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="search-input">
      <div class="input-group">
        <span class="input-group-text"><i class="bi bi-search"></i></span>
              <input 
        type="text" 
        class="form-control" 
        placeholder="Search resources..." 
        [ngModel]="searchTerm"
        (ngModelChange)="onSearchChange($event)">
      </div>

    </div>
  `,
  styles: [`
    .search-input {
      width: 300px;
    }

    .form-control {
      &:focus {
        border-color: #3498db;
        box-shadow: 0 0 0 0.2rem rgba(52, 152, 219, 0.25);
      }
    }

    @media (max-width: 992px) {
      .search-input {
        width: 100%;
        margin-bottom:1rem;
      }
    }
  `]
})
export class ResourcesSearchComponent {
  @Input() searchTerm: string = '';
  @Output() searchChange = new EventEmitter<string>();

  onSearchChange(term: string) {
    this.searchChange.emit(term);
  }
}