import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoritesKey = 'pokemon_favorites';
  private favoritesSubject = new BehaviorSubject<Pokemon[]>(this.getFavorites());
  favorites$ = this.favoritesSubject.asObservable();

  addFavorite(pokemon: Pokemon): void {
    const favorites = this.getFavorites();
    if (!favorites.some(fav => fav.id === pokemon.id)) {
      favorites.push(pokemon);
      this.saveFavorites(favorites);
      this.favoritesSubject.next(favorites);
    }
  }

  removeFavorite(pokemonId: number): void {
    const favorites = this.getFavorites().filter(fav => fav.id !== pokemonId);
    this.saveFavorites(favorites);
    this.favoritesSubject.next(favorites);
  }

  getFavorites(): Pokemon[] {
    const favoritesJson = localStorage.getItem(this.favoritesKey);
    return favoritesJson ? JSON.parse(favoritesJson) : [];
  }

  private saveFavorites(favorites: Pokemon[]): void {
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  }

  sortFavorites(sortBy: 'name' | 'id' | 'type'): Pokemon[] {
    const favorites = this.getFavorites();
    
    switch (sortBy) {
      case 'name':
        return [...favorites].sort((a, b) => a.name.localeCompare(b.name));
      case 'id':
        return [...favorites].sort((a, b) => a.id - b.id);
      case 'type':
        return [...favorites].sort((a, b) => 
          a.types[0].type.name.localeCompare(b.types[0].type.name));
      default:
        return favorites;
    }
  }
}