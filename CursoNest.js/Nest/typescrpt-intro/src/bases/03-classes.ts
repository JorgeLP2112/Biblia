import axios from "axios";
import { PokeapiResponse } from "../interfaces/pokeapi-response.interface";

// Forma Tradicional
export class Pokemon1 {
  public id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

// Forma Abreviada de declarar una clase
export class Pokemon2 {
  constructor(public id: number, public name: string) {}
}

// Getter y THIS
export class Pokemon3 {
  get imageUrl() {
    return `https://pokeapi.co/api/v2/pokemon/${this.id}/`;
  }

  constructor(public id: number, public name: string) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves() {
    const { data } = await axios.get<PokeapiResponse>(
      `https://pokeapi.co/api/v2/pokemon/${this.id}/`
    );

    console.log(data.moves);
    return data.moves;
  }
}

export const charmander = new Pokemon3(4, "Charmander");
export const squirtle = new Pokemon2(4, "Squirtle");

charmander.getMoves();
