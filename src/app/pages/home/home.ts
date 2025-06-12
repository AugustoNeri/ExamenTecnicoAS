import { Component } from '@angular/core';
import { PokemonService } from '../../service/pokemon';
import { Pokemon, Evolution } from '../../models/pokemon.model';
import { SearchBarComponent } from '../../components/search/search';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card';
import { FavoritesSidebarComponent } from '../../components/favorites-sidebar/favorites-sidebar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [CommonModule, SearchBarComponent,PokemonCardComponent,FavoritesSidebarComponent],

  styleUrls: ['./home.css']
})
export class HomeComponent {
  pokemon: Pokemon | null = null;
  evolutions: Evolution[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(private pokemonService: PokemonService, private router: Router) {}

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

  onViewFavorites(): void {
    this.router.navigate(['/favorites']);
  }
}