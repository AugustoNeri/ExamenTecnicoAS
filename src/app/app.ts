import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FavoritesSidebarComponent } from './components/favorites-sidebar/favorites-sidebar';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FavoritesSidebarComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'pokemon-search-app';
}