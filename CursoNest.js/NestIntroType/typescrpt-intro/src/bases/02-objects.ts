export const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

pokemonIds.push(+"11"); // Añadir + a la cadena de texto la convierte en número

// Objeto de JavaScript, no puede ser validado para asegurar que tenga las propiedades correctas
// Al tener la interfaz se puede especificar que nuestra variable es de tipo Pokemon
// Con eso se puede validar que tenga las propiedades correctas
export const pikachu: Pokemon = {
  id: 1,
  name: "Pikachu",
  type: "Electric",
};

// Para eso existen las interfaces, que normalmente van capitalizadas
export interface Pokemon {
  id: number;
  name: string;
  type: string;
  gender?: string; // El signo de interrogación indica que es opcional
}

export const pokemons: Pokemon[] = [];

pokemons.push(pikachu);

console.log(pokemons);
