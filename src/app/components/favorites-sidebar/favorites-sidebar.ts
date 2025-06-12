import { Component, EventEmitter, Output } from '@angular/core';
import { FavoritesService } from '../../service/favorites-services';
import { Observable } from 'rxjs';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-favorites-sidebar',
  templateUrl: './favorites-sidebar.html',
  styleUrls: ['./favorites-sidebar.css']
})
export class FavoritesSidebarComponent {
  @Output() viewFavorites = new EventEmitter<void>();
  favorites$: Observable<Pokemon[]>;

  constructor(private favoritesService: FavoritesService) {
    this.favorites$ = this.favoritesService.favorites$;
  }

  // Añade este método que falta
  removeFavorite(pokemonId: number): void {
    this.favoritesService.removeFavorite(pokemonId);
  }

  onViewFavorites(): void {
    this.viewFavorites.emit();
  }
}