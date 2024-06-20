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

La inyección de dependencias es un patrón de diseño utilizado en la programación para lograr la inversión de control entre clases y sus dependencias. En lugar de que una clase cree internamente sus dependencias, estas se le pasan desde fuera, lo que facilita la modularidad, la flexibilidad y la prueba del código.

- **Definición de Interfaces o Clases Abstractas**: Se definen interfaces o clases abstractas para las dependencias. Esto permite que el código dependa de abstracciones en lugar de implementaciones concretas.

- **Implementación de Dependencias**: Se crean implementaciones concretas de estas interfaces o clases abstractas.

- **Inyección de Dependencias**: Las instancias de las dependencias (objetos) se "inyectan" en las clases que las necesitan a través de constructores, métodos setter o directamente en las propiedades. Esto se puede hacer manualmente o mediante contenedores de inyección de dependencias que automatizan este proceso.

- **Uso de Dependencias**: La clase que recibe las dependencias las utiliza para realizar sus funciones, sin necesidad de saber cómo se crean o se gestionan estas dependencias.

```typescript
import axios from "axios";

export class PokeApiAdapter {
  private readonly axios = axios;

  async get(url: string) {
    const { data } = await this.axios.get(url);
    return data;
  }

  async post(url: string, data: any) {}

  async patch(url: string, data: any) {}

  async delete(url: string) {}
}

//////////////////////////////////////////////////////////////

import {
  Move,
  PokeapiResponse,
} from "../interfaces/pokeapi-response.interface";
import { PokeApiAdapter } from "../api/pokeapi.adapter";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    // Todo: inyectar dependencias
    private readonly http: PokeApiAdapter
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const data = await this.http.get("https://pokeapi.co/api/v2/pokemon/4");
    console.log(data.moves);

    return data.moves;
  }
}

const pokeApi = new PokeApiAdapter();

export const charmander = new Pokemon(4, "Charmander", pokeApi);

charmander.getMoves();
```

- **Anexo**: 04-injection.ts
- **Ruta**: NestIntroType/typescript-intro/src/bases/...

## Genéricos y Sustitución de Liskov

### Tipos Genéricos

Los tipos genéricos en TypeScript permiten crear componentes que pueden trabajar con cualquier tipo de dato. Esto proporciona una manera de asegurar la consistencia de tipo a lo largo de tu código mientras mantienes la flexibilidad para trabajar con diferentes tipos de datos.

- **Definición de Tipo Genérico**: Se define un tipo genérico utilizando el símbolo <T>, donde T es un marcador de posición para el tipo de dato que se utilizará. Este marcador de posición puede ser reemplazado por cualquier tipo cuando se invoca el componente genérico.

- **Uso de Tipo Genérico**: Cuando se utiliza un componente genérico, se especifica el tipo de dato concreto que reemplazará al marcador de posición T. Esto permite que el componente opere con ese tipo de dato específico.

- **Flexibilidad**: Los tipos genéricos permiten escribir funciones, clases, e interfaces que pueden trabajar con cualquier tipo de dato, lo que aumenta la reusabilidad y la flexibilidad del código.

- **Seguridad de Tipo**: A pesar de su flexibilidad, los tipos genéricos ayudan a mantener la seguridad de tipo en el código, asegurando que las operaciones realizadas sean apropiadas para el tipo de dato con el que se está trabajando.

```typescript
export class PokeApiFetchAdapter {
  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url);
    const data: T = await resp.json();
    return data;
  }
}
```

- `<T>`: Es un tipo genérico que representa el tipo de dato que se espera como respuesta del método get. Esto permite que el método get sea reutilizable y pueda trabajar con diferentes tipos de datos de respuesta.

- `Promise<T>`: Indica que el método get devuelve una promesa que, cuando se resuelve, contiene un valor del tipo T.

### Sustitución de Liskov

El principio de sustitución de Liskov (LSP) es un concepto en programación orientada a objetos que dice que si una clase S es un subtipo de una clase T, entonces los objetos de tipo T en un programa pueden ser reemplazados con objetos de tipo S sin alterar ninguna de las propiedades deseables del programa (corrección, tarea realizada, etc.). Este principio se centra en asegurar que una subclase pueda reemplazar a su superclase sin afectar el comportamiento del programa.

```typescript
import axios from "axios";

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}
export class PokeApiFetchAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url);
    const data: T = await resp.json();
    console.log("Fetch");
    return data;
  }
}
export class PokeApiAdapter implements HttpAdapter {
  private readonly axios = axios;

  async get<T>(url: string): Promise<T> {
    const { data } = await this.axios.get<T>(url);
    console.log("Axios");
    return data;
  }

  async post(url: string, data: any) {}

  async patch(url: string, data: any) {}

  async delete(url: string) {}
}
```

El principio de sustitución de Liskov (LSP) se aplica a través de la interfaz HttpAdapter y sus implementaciones PokeApiFetchAdapter y PokeApiAdapter. Aquí está cómo se aplica el LSP paso a paso:

- **Definición de la interfaz HttpAdapter**: Esta interfaz define un contrato con un método `get<T>(url: string): Promise<T>`. Cualquier clase que implemente esta interfaz debe proporcionar una implementación para este método.

- **Implementación de la interfaz por PokeApiFetchAdapter y PokeApiAdapter**: Ambas clases implementan la interfaz `HttpAdapter`, lo que significa que ambas deben proporcionar una implementación del método get.

- **Sustitución**: Debido a que ambas clases implementan la misma interfaz, objetos de `PokeApiFetchAdapter` o `PokeApiAdapter` pueden ser utilizados de manera intercambiable en cualquier lugar donde se espere un `HttpAdapter`. Esto es directamente lo que el LSP establece: si `S` es un subtipo de `T`, entonces objetos de tipo `T` pueden ser sustituidos con objetos de tipo `S` (en este caso, `HttpAdapter` es `T`, y `PokeApiFetchAdapter` y `PokeApiAdapter` son `S`).

- **Preservación del comportamiento**: Para cumplir completamente con el LSP, no solo es necesario que las subclases puedan ser sustituidas por su superclase (o interfaz), sino que también deben preservar el comportamiento esperado. En tu código, esto significa que tanto `PokeApiFetchAdapter` como `PokeApiAdapter` deben cumplir con el contrato de `HttpAdapter` no solo en términos de interfaz sino también en comportamiento. Ambas clases deben poder realizar una petición GET y retornar los datos esperados sin causar efectos secundarios inesperados o errores en el programa.

- **Extensibilidad**: Aunque `PokeApiAdapter` implementa métodos adicionales (post, patch, delete), esto no viola el LSP, ya que la sustitución se basa en el cumplimiento del contrato de `HttpAdapter`. Los métodos adicionales son simplemente funcionalidades extendidas que no afectan la capacidad de `PokeApiAdapter` para actuar como un `HttpAdapter`.

```typescript
// Abstracción que define un contrato para las operaciones HTTP
private readonly http: HttpAdapter

// Implementaciones concretas que pueden ser intercambiadas sin afectar el funcionamiento de la clase `Pokemon`
const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

// Uso de diferentes implementaciones concretas sin alterar el comportamiento esperado
export const charmander = new Pokemon(4, "Charmander", pokeApiFetch);
export const charmeleon = new Pokemon(5, "Charmeleon", pokeApiAxios);
```

En el caso del archivo 04-injection.ts, se ve que las 3 partes descritas del código cumplen con el principio de Liskov.

- **Anexo**: 04-injection.ts
- **Ruta**: NestIntroType/typescript-intro/src/bases/...

## Decoradores

### Decorador de Clase

Los decoradores de clase en TypeScript son funciones especiales que ofrecen una manera de añadir anotaciones y una sintaxis metaprogramática para observaciones y modificaciones de clases. Se ejecutan en tiempo de definición de la clase, es decir, cuando el código se está ejecutando y no cuando se instancian objetos de la clase. Aquí te explico paso a paso cómo funcionan los decoradores de clase en el contexto del código proporcionado:

- **Definición de un Decorador**: Un decorador es una función que se utiliza para modificar, observar o reemplazar la definición de una clase. En el código, MyDecorator es un ejemplo de un decorador de clase. Este decorador no hace mucho, ya que simplemente devuelve la clase NewPokemon, pero sirve como un buen ejemplo para entender la sintaxis básica.

- **Sintaxis del Decorador**: Para aplicar un decorador a una clase, se utiliza el símbolo @ seguido del nombre del decorador y se coloca justo antes de la definición de la clase. En el código, @MyDecorator() se aplica a la clase Pokemon. Esto significa que cuando se define la clase Pokemon, TypeScript primero ejecutará MyDecorator().

- **Cómo Funciona MyDecorator**: El decorador MyDecorator es una función que devuelve otra función. La función interna recibe un argumento target, que es el constructor de la clase a la que se aplica el decorador. En este caso, target sería el constructor de Pokemon. Sin embargo, el decorador en este ejemplo no utiliza el target para nada; simplemente devuelve la clase NewPokemon. Esto no es un patrón común en el uso real de decoradores, ya que normalmente se esperaría que el decorador modifique o utilice de alguna manera el target.

- **Propósito y Uso**: Los decoradores pueden ser utilizados para añadir metadatos, propiedades o métodos a la clase, o incluso para reemplazar completamente la definición de la clase. Son una herramienta poderosa para la metaprogramación. En frameworks como Angular, los decoradores son fundamentales para definir componentes, servicios, y otras entidades.

```typescript
class NewPokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`NO QUIERO!!`);
  }

  speak() {
    console.log(`NO QUIERO HABLAR!!`);
  }
}

const MyDecorator = () => {
  return (target: Function) => {
    // console.log(target)
    return NewPokemon;
  };
};

@MyDecorator()
export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }
}
```

- **Anexo**: 05-decorators.ts
- **Ruta**: NestIntroType/typescript-intro/src/bases/...

### Decorados de Método

Los decoradores de métodos en TypeScript son funciones especiales que se pueden adjuntar a la declaración de un método, accesorio, o propiedad en una clase. Permiten observar, modificar o reemplazar definiciones de métodos. Los decoradores proporcionan una manera de añadir tanto anotaciones como una meta-programación sintáctica a la clase y sus miembros.

En el código proporcionado, se define un decorador llamado Deprecated. Este decorador se utiliza para marcar métodos específicos en una clase como obsoletos/depreciados. Aquí está el desglose de cómo funciona este decorador:

- **Definición del Decorador Deprecated**: Este decorador toma un argumento `deprecationReason`, que es una cadena describiendo por qué el método ha sido marcado como obsoleto.

- **Función del Decorador**: El decorador Deprecated es una función de fábrica que devuelve otra función. Esta función interna es la que actúa como el decorador propiamente dicho. Recibe tres parámetros:

  - `target`: El constructor de la clase para un miembro estático, o el prototipo de la clase para un miembro de instancia.
  - `memberName`: El nombre del miembro (método, propiedad) al que se aplica el decorador.
  - `propertyDescriptor`: Un objeto que describe la propiedad, incluyendo su configurabilidad, enumerabilidad, escriturabilidad, y el valor.

- **Funcionalidad del Decorador**: Dentro del decorador, se modifica el descriptor de la propiedad (en este caso, un método) para que, cuando se llame al método, primero se muestre una advertencia en la consola indicando que el método está obsoleto, junto con la razón de su obsolescencia. Luego, se llama al método original con los argumentos proporcionados.

- **Aplicación del Decorador**: El decorador Deprecated se aplica al método `speak` de la clase `Pokemon` usando la sintaxis `@Deprecated("Must use speak2 instead")`. Esto significa que cada vez que se llame al método `speak` de una instancia de `Pokemon`, se mostrará la advertencia de obsolescencia antes de ejecutar el código original del método.

- **Ejemplo de Uso**: Al final del código, se crea una instancia de `Pokemon` llamada `charmander` y se llama al método `speak`. Debido a que `speak` está decorado con Deprecated, se mostrará la advertencia de obsolescencia en la consola antes de mostrar el mensaje original del método `speak`.

```typescript
const Deprecated = (deprecationReason: string) => {
  return (
    target: any,
    memberName: string,
    propertyDescriptor: PropertyDescriptor
  ) => {
    // console.log({target})
    return {
      get() {
        const wrapperFn = (...args: any[]) => {
          console.warn(
            `Method ${memberName} is deprecated with reason: ${deprecationReason}`
          );
          //! Llamar la función propiamente con sus argumentos
          propertyDescriptor.value.apply(this, args);
        };
        return wrapperFn;
      },
    };
  };
};

export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  @Deprecated("Must use speak2 instead")
  speak() {
    console.log(`${this.name}, ${this.name}`);
  }
}
```

- **Anexo**: 06-decorators2.ts
- **Ruta**: NestIntroType/typescript-intro/src/bases/...