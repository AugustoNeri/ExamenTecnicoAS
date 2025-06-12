import { Component } from '@angular/core';
import { FavoritesService } from '../../services/favorites';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  favorites: Pokemon[] = [];
  sortBy: 'name' | 'id' | 'type' = 'name';

  constructor(private favoritesService: FavoritesService) {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

  removeFavorite(pokemonId: number): void {
    this.favoritesService.removeFavorite(pokemonId);
    this.loadFavorites();
  }

  sortFavorites(): void {
    this.favorites = this.favoritesService.sortFavorites(this.sortBy);
  }
}