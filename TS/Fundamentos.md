# Tipos e Interfaces en TypeScript

TypeScript introduce el concepto de tipos y interfaces para añadir tipado estático a JavaScript. Esto permite a los desarrolladores escribir código más seguro y fácil de entender y mantener.

## Tipos (Types)

Los tipos permiten definir la forma de un objeto, combinando propiedades y métodos. Puedes usar tipos para definir variables, funciones, y estructuras de datos.

```typescript
type Punto = {
    x: number;
    y: number;
};

const dibujarPunto = (punto: Punto) => {
    // Implementación
};
```

### Tipos Primitivos

TypeScript define varios tipos primitivos, incluyendo `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, y `bigint`.

```typescript
let edad: number = 30;
let nombre: string = "Juan";
let esEstudiante: boolean = true;
```

### Tipos Unión

Los tipos unión permiten definir una variable que puede tener uno de varios tipos.

```typescript
let id: number | string;
id = 10; // Válido
id = "002"; // Válido
```

## Interfaces

Las interfaces en TypeScript son una forma poderosa de definir contratos dentro de tu código, así como contratos con código fuera de tu proyecto.

```typescript
interface Persona {
    nombre: string;
    edad: number;
    hablar(): void;
}

const persona: Persona = {
    nombre: "Ana",
    edad: 25,
    hablar() {
        console.log("Hola");
    },
};
```

### Extensión de Interfaces

Las interfaces pueden extenderse, lo que permite crear nuevas interfaces basadas en una o más interfaces existentes.

```typescript
interface Empleado extends Persona {
    salario: number;
}

const empleado: Empleado = {
    nombre: "Carlos",
    edad: 30,
    hablar() {
        console.log("Hola, soy empleado");
    },
    salario: 50000,
};
```

## Diferencias entre Tipos e Interfaces

- **Extensión**: Las interfaces son extensibles, lo que significa que puedes añadir nuevas propiedades a una interfaz existente. Los tipos, aunque pueden ser extendidos mediante la intersección de tipos, no son tan flexibles como las interfaces en este aspecto.
- **Declaraciones Múltiples**: Las interfaces permiten declaraciones múltiples (del mismo nombre de interfaz) que se fusionan automáticamente. Esto no es posible con los tipos.
- **Uso**: Generalmente, se recomienda usar interfaces para definir objetos y tipos para uniones o intersecciones.

TypeScript ofrece una gran flexibilidad y poder al trabajar con tipos y interfaces, permitiendo a los desarrolladores escribir código más seguro y mantenible.
