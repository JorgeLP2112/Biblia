# Decoradores y Metadatos en TypeScript

TypeScript proporciona una forma de añadir anotaciones y una sintaxis de metaprogramación a las declaraciones de clase y miembro a través de los decoradores. Los decoradores ofrecen una manera de observar, modificar o reemplazar definiciones de clases, métodos, accesores, propiedades y parámetros.

## Decoradores

Un decorador es una especie de declaración que se puede adjuntar a una declaración de clase, método, accesor, propiedad, o parámetro. Los decoradores utilizan la forma `@expression`, donde `expression` debe evaluar una función que será llamada en tiempo de ejecución con información sobre la declaración decorada.

### Decoradores de Clase

Un decorador de clase se aplica a la constructora de la clase y se utiliza para observar, modificar o reemplazar una definición de clase.

```typescript
function Componente(constructor: Function) {
    console.log('Componente registrado:', constructor);
}

@Componente
class MiComponente {}
```

### Decoradores de Método

Los decoradores de método se aplican a los descriptores de propiedad de los métodos y pueden ser usados para observar, modificar o reemplazar definiciones de métodos.

```typescript
function Log(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`Llamada a ${propertyName} con argumentos: ${args}`);
        return originalMethod.apply(this, args);
    };
}

class MiClase {
    @Log
    miMetodo(arg: string) {
        console.log(arg);
    }
}
```

### Decoradores de Acceso

Similar a los decoradores de método, pero se aplican a los accesores de las propiedades de la clase.

```typescript
function Minimo(valor: number) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let valorActual = descriptor.value;

        const getter = () => valorActual;
        const setter = (nuevoValor: number) => {
            valorActual = nuevoValor < valor ? valor : nuevoValor;
        };

        descriptor.get = getter;
        descriptor.set = setter;
    };
}

class MiClase {
    private _miPropiedad: number;

    @Minimo(0)
    set miPropiedad(valor: number) {
        this._miPropiedad = valor;
    }

    get miPropiedad() {
        return this._miPropiedad;
    }
}
```

## Metadatos

TypeScript, en combinación con la biblioteca `reflect-metadata`, permite añadir y usar metadatos en las declaraciones de clase, lo que puede ser útil para la reflexión en tiempo de ejecución.

Para usar metadatos, primero debes instalar la biblioteca:

```bash
npm install reflect-metadata
```

Luego, puedes usar el decorador `Reflect.metadata` para añadir metadatos a las declaraciones:

```typescript
import "reflect-metadata";

class MiClase {
    @Reflect.metadata("descripcion", "Esta es una propiedad")
    miPropiedad: string;
}
```

Los decoradores y metadatos en TypeScript ofrecen una poderosa herramienta de metaprogramación, permitiendo a los desarrolladores escribir código más expresivo y flexible.