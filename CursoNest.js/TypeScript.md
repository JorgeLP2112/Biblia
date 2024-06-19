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

