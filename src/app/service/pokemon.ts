import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { Pokemon, PokemonSpecies, EvolutionChain, Evolution } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemonByIdOrName(idOrName: string | number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/pokemon/${idOrName}`);
  }

  getPokemonSpecies(url: string): Observable<PokemonSpecies> {
    return this.http.get<PokemonSpecies>(url);
  }

  getEvolutionChain(url: string): Observable<EvolutionChain> {
    return this.http.get<EvolutionChain>(url);
  }

  getPokemonWithEvolutions(idOrName: string | number): Observable<{ pokemon: Pokemon; evolutions: Evolution[] }> {
    return this.getPokemonByIdOrName(idOrName).pipe(
      switchMap(pokemon => {
        return this.getPokemonSpecies(pokemon.species.url).pipe(
          switchMap(species => {
            return this.getEvolutionChain(species.evolution_chain.url).pipe(
              map(evolutionChain => {
                const evolutions = this.extractEvolutions(evolutionChain.chain);
                return { pokemon, evolutions };
              })
            );
          })
        );
      })
    );
  }

  private extractEvolutions(chain: EvolutionChain['chain']): Evolution[] {
    const evolutions: Evolution[] = [];

    const extract = (currentChain: {
      species: { name: string; url: string };
      evolves_to: any[]; // Or use a more specific type if needed
    }) => {
      const id = this.extractIdFromUrl(currentChain.species.url);
      evolutions.push({
        name: currentChain.species.name,
        id: id
      });

      currentChain.evolves_to.forEach(nextChain => {
        extract(nextChain);
      });
    };

    extract(chain);
    return evolutions;
  }

  private extractIdFromUrl(url: string): number {
    const matches = url.match(/\/pokemon-species\/(\d+)\//);
    return matches ? parseInt(matches[1], 10) : 0;
  }
}