import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class ColoresService {

  coloresExtendidos = ['blue', 'red', 'yellow', 'gray', 'black', 'white', 'green', 'purple', 'brown']

  pokemones: Pokemon[] = []

  constructor() {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.json())
      .then(data => this.pokemones = data.results)
  }
}
