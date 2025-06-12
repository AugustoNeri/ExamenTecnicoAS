import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon';
import { Pokemon, Evolution } from '../../models/pokemon.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  pokemon: Pokemon | null = null;
  evolutions: Evolution[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(private pokemonService: PokemonService) {}

  onSearch(searchTerm: string): void {
    this.isLoading = true;
    this.error = null;
    this.pokemon = null;
    this.evolutions = [];

    this.pokemonService.getPokemonWithEvolutions(searchTerm).subscribe({
      next: ({ pokemon, evolutions }) => {
        this.pokemon = pokemon;
        this.evolutions = evolutions.filter(evo => evo.id !== pokemon.id);
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Pokemon not found. Please try another name or ID.';
        this.isLoading = false;
      }
    });
  }
}