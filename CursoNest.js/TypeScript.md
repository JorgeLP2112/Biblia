# Introducción a TypeScript

## Preparación del Proyecto
 
Para comenzar, vamos a crear un proyecto de Vite:

```
$ npm create vite@latest
```

Para las configuraciones iniciales vamos a elegir las siguientes opciones:
- **Nombre**: Nombre de la Carpeta
- **Framework**: Vanilla
- **Lenguaje**: TypeScript

Por último se deben instalar los módulos de Node:

```
$ npm i
```

## Tipos y Bases sobre Módulos

En TypeScript podemos realizar archivos que declaren exportaciones e importaciones para nuestro código. A menudo se recomienda evitar el código ejecutable, ya que se va a realizar con una simple importación que hagamos, sin embargo queda sujeto al funcionamiento esperado del archivo. A continuación se muestra un ejemplo de los tipos de datos, exportaciones, importaciones e interpolaciones.

```typescript
export const Name: string = "Jorge";
export const age: number = 21;
export const templateString: string = `Hola, mi nombre es ${Name} y tengo ${age} años`;
```

En TypeScript, al igual que en JavaScript, ${} se utiliza dentro de las plantillas de cadena (template strings) para interpolar expresiones. Esto significa que puedes insertar variables, expresiones, o incluso llamadas a funciones dentro de una cadena de texto sin necesidad de concatenarlas manualmente. 

Las plantillas de cadena se delimitan con backticks (`) en lugar de comillas simples o dobles.

```typescript
import { Name, age } from "./bases/01-types.ts";
```

Al momento de realizar la exportación es importante tomar en cuenta los argumentos que estamos considerando, en este caso se especifican los export con nombre. Si existiera un export default no es necesario poner las llaves.

- **Anexo**: 01-types.ts
- **Ruta**: NestIntroType/typescript-intro/src/bases/...

## Objetos e Interfaces

En TypeScript, tanto los objetos como las interfaces se utilizan para describir la forma o estructura de un objeto, especificando los tipos de sus propiedades y métodos.

### Objetos

Los objetos en TypeScript son colecciones de pares clave-valor donde puedes especificar el tipo de valor que se espera para cada clave. Puedes definir un objeto y sus tipos directamente o usar una interfaz o tipo para definir su estructura.

```typescript
const user: { nombre: string; edad: number } = {
  nombre: "Jorge",
  edad: 21
};
```

### Interfaces

Las interfaces son una forma poderosa y flexible de definir contratos dentro de tu código, así como para compartirlos entre objetos. Permiten definir la forma de un objeto, especificando los tipos de sus propiedades y si son opcionales o no, además de definir métodos y sus tipos de retorno y parámetros.

```typescript
interface Usuario {
  nombre: string;
  edad: number;
  genero?: string;
}

const user: Usuario = {
  nombre: "Jorge",
  edad: 21
};
```

### Arreglos

En TypeScript, los arreglos se pueden tipar, lo que significa que puedes especificar el tipo de elementos que contienen. Esto proporciona una verificación de tipo en tiempo de compilación para los elementos del arreglo, asegurando que todos los elementos cumplan con el tipo especificado.

```typescript
export const pikachu: Pokemon = {
  id: 1,
  name: "Pikachu",
  type: "Electric",
};

// Se especifica que pokemons va a ser un arreglo de objetos de tipo Pokemon
export const pokemons: Pokemon[] = [];

pokemons.push(pikachu);

console.log(pokemons);
```

- **Anexo**: 02-objects.ts
- **Ruta**: NestIntroType/typescript-intro/src/bases/...

## Clases y Forma Abreviada

En TypeScript, las clases son una forma poderosa de encapsular código y representar entidades con propiedades y métodos. Permiten definir un modelo para crear objetos con características y comportamientos específicos. TypeScript añade funcionalidades de tipado y visibilidad a las clases de JavaScript.

```typescript
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
```

- **Anexo**: 03-classes.ts
- **Ruta**: NestIntroType/typescript-intro/src/bases/...

## Getters, Métodos y THIS

El concepto de getter en TypeScript, ilustrado en la clase Pokemon3 del fragmento de código, es una forma de definir métodos de acceso en una clase que se comportan como propiedades. Los getters permiten ejecutar una función cuando se accede a una propiedad específica de un objeto, pero sin necesidad de llamar a la función con paréntesis () como lo harías normalmente. Esto es útil para calcular o modificar dinámicamente el valor de una propiedad antes de devolverla.

```typescript
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
}
```

Este getter permite acceder a la URL de la imagen de un Pokémon específico de forma dinámica, utilizando el id del Pokémon. Cuando accedes a pokemon.imageUrl, se ejecuta el código dentro del getter y se devuelve la URL formateada, sin necesidad de llamar a imageUrl como si fuera un método (pokemon.imageUrl()).

El uso de this dentro del getter hace referencia a la instancia actual de la clase, permitiendo acceder a sus propiedades, como id en este caso.

- **Anexo**: 03-classes.ts
- **Ruta**: NestIntroType/typescript-intro/src/bases/...

## Métodos Asíncronos

El método getMoves en la clase Pokemon3 es un ejemplo de cómo realizar solicitudes HTTP asincrónicas en TypeScript utilizando async/await y la desestructuración de objetos.

```typescript
async getMoves() {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${this.id}/`
  );

  console.log(data.moves);
  return data.moves;
}
```

- **async**: La palabra clave async antes de la definición de la función indica que getMoves es una función asíncrona. Esto significa que la función puede realizar operaciones asincrónicas, como solicitudes de red, y esperar a que estas operaciones se completen sin bloquear la ejecución del resto del código. Las funciones asíncronas siempre devuelven una promesa.

- **await**: Dentro de una función async, puedes utilizar la palabra clave await para esperar a que se resuelva una promesa. En este caso, await axios.get(...) pausa la ejecución de getMoves en ese punto hasta que la solicitud HTTP realizada por axios.get se complete y devuelva una respuesta. Esto permite tratar operaciones asincrónicas como si fueran sincrónicas, haciendo que el código sea más legible y fácil de seguir.

- **Desestructuración**: La desestructuración es una característica de JavaScript que permite extraer datos de arreglos u objetos en variables separadas de una manera más concisa. En el ejemplo, { data } = await axios.get(...) desestructura el objeto resultante de la promesa resuelta por axios.get. Esto significa que en lugar de tener que acceder a la respuesta con algo como response.data, directamente se obtiene el objeto data que contiene la información deseada. En este caso, data contiene la respuesta de la API con los datos del Pokémon, incluyendo sus movimientos.

- **Anexo**: 03-classes.ts
- **Ruta**: NestIntroType/typescript-intro/src/bases/...

## Tipo de Datos en Respuesta HTTP

En TypeScript podemos agregar el tipo de dato que queremos que regresen las peticiones por medio de las interfaces, como se puede ver en el siguiente ejemplo:

```typescript
async getMoves() {
    const { data } = await axios.get<PokeapiResponse>(
      `https://pokeapi.co/api/v2/pokemon/${this.id}/`
    );

    console.log(data.moves);
    return data.moves;
}
```

- **Anexo**: 03-classes.ts
- **Ruta**: NestIntroType/typescript-intro/src/bases/...

## Inyección de Dependencias

