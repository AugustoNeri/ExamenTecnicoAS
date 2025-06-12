import { Component, EventEmitter, Output } from '@angular/core';
import { FavoritesService } from '../../service/favorites-services';
import { Observable } from 'rxjs';
import { Pokemon } from '../../models/pokemon.model';
import { FormsModule } from '@angular/forms';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites-sidebar',
  imports: [
    CommonModule,
    PokemonCardComponent,
    FormsModule // Add this to imports array
  ],
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