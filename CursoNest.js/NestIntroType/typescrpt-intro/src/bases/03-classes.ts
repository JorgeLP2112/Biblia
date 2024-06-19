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

export const charmander = new Pokemon1(4, "Charmander");
export const squirtle = new Pokemon2(4, "Squirtle");
