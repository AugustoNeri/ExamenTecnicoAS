import { Component, EventEmitter, Output } from '@angular/core';
import { FavoritesService } from '../../service/favorites.service';
import { Pokemon } from '../../models/pokemon.model';
@Component({
  selector: 'app-favorites-sidebar',
  imports: [],
  templateUrl: './favorites-sidebar.html',
  styleUrl: './favorites-sidebar.css'
})
export class FavoritesSidebarComponent {
  @Output() viewFavorites = new EventEmitter<void>();
  favorites$ = this.favoritesService.favorites$;

  constructor(private favoritesService: FavoritesService) {}

  removeFavorite(pokemonId: number): void {
    this.favoritesService.removeFavorite(pokemonId);
  }

  onViewFavorites(): void {
    this.viewFavorites.emit();
  }
}
