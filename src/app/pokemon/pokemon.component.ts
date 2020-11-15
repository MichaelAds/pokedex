import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemon: any;
  pokemons: FormGroup;

  constructor(private pokeServer: PokemonService, private fb: FormBuilder) {
    this.pokemons = this.fb.group({
      namePoke: ''
    })
  }

  ngOnInit() {
  }

  searchPokemon() {
    this.pokeServer.getPokemon(this.pokemons.controls.namePoke.value)
    .subscribe(res => {
      console.log(res)
      this.pokemon = res;
    })
  }

}
