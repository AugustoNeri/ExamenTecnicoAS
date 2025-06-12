import { Component } from '@angular/core';
import { FavoritesService } from '../../service/favorites-services';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.html',
  imports: [CommonModule, PokemonCardComponent],
  styleUrls: ['./favorites.css']
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