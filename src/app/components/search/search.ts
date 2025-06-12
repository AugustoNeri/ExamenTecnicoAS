import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Add this import

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule], // Add this
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();
  searchTerm: string = '';

  onSearch(): void {
    if (this.searchTerm.trim()) {
      this.search.emit(this.searchTerm.trim().toLowerCase());
    }
  }
}