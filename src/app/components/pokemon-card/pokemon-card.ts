import { Component, Input } from '@angular/core';
import { Pokemon, Evolution } from '../../models/pokemon.model';
import { TYPE_COLORS } from '../../shared/type-colors';
import { FavoritesService } from '../service/favo-service';

@Component({
  selector: 'app-pokemon-card',
  imports: [],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.css'
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;
  @Input() evolutions: Evolution[] = [];
  @Input() showAddButton: boolean = true;

  constructor(private favoritesService: FavoritesService) {}

  getTypeColor(type: string): string {
    return TYPE_COLORS[type] || '#777';
  }

  addToFavorites(): void {
    this.favoritesService.addFavorite(this.pokemon);
  }
}