# Sintaxis y Estructuras de Control en JavaScript

JavaScript es un lenguaje de programación que se utiliza principalmente para crear páginas web dinámicas. Una parte fundamental de aprender JavaScript es entender su sintaxis y las estructuras de control que ofrece.

## Sintaxis Básica

### Variables

Las variables en JavaScript son contenedores para almacenar datos. La declaración de variables puede hacerse usando `var`, `let`, o `const`, cada uno con su propio ámbito y reglas de uso.

- `var`: Declara una variable, opcionalmente inicializándola con un valor. `var` tiene un ámbito de función o global si se declara fuera de una función. Su uso ha disminuido a favor de `let` y `const` debido a sus peculiaridades con el hoisting y el ámbito.
- `let`: Introduce una variable con ámbito de bloque (`{}`), lo que significa que su uso está limitado al bloque en el que se declara. Es ideal para bucles y condiciones donde la variable no necesita existir fuera del bloque.
- `const`: Declara una constante de ámbito de bloque, lo que significa que el valor asignado no puede ser cambiado (es inmutable) después de su inicialización. Es recomendado para valores que no deben cambiar a lo largo del programa.

```javascript
let nombre = "Juan";
const PI = 3.14;
var edad = 30;
```
### Operadores

Los operadores en JavaScript se pueden clasificar en varios tipos, permitiendo realizar operaciones y tomar decisiones en el código.

#### Operadores Aritméticos

- `+` Suma
- `-` Resta
- `*` Multiplicación
- `/` División
- `%` Módulo (resto de la división)
- `++` Incremento
- `--` Decremento

#### Operadores de Asignación

- `=` Asigna un valor a una variable
- `+=` Suma y asigna
- `-=` Resta y asigna
- `*=` Multiplica y asigna
- `/=` Divide y asigna
- `%=` Asigna el resto de una división

#### Operadores de Comparación

- `==` Igual a (valor)
- `===` Estrictamente igual a (valor y tipo)
- `!=` No igual a
- `!==` Estrictamente no igual a
- `>` Mayor que
- `<` Menor que
- `>=` Mayor o igual que
- `<=` Menor o igual que

#### Operadores Lógicos

- `&&` AND lógico
- `||` OR lógico
- `!` NOT lógico

#### Operadores de Cadena

- `+` Concatenación de cadenas

#### Operadores Ternarios

- `? :` Operador condicional que asigna un valor a una variable basado en una condición

```javascript
let resultado = (edad >= 18) ? "adulto" : "menor";
```

#### Operadores de Tipo

- `typeof` Devuelve el tipo de una variable
- `instanceof` Comprueba si un objeto es instancia de un tipo particular

## Estructuras de Control en JavaScript

Las estructuras de control son fundamentales en JavaScript para dirigir el flujo de ejecución del código. Permiten tomar decisiones, ejecutar código repetidamente bajo ciertas condiciones, y más. A continuación, se detallan las principales estructuras de control en JavaScript.

### Condiciones

- **if...else**: Permite ejecutar un bloque de código si una condición es verdadera y otro bloque si la condición es falsa.

```javascript
if (condicion) {
    // bloque de código a ejecutar si la condición es verdadera
} else {
    // bloque de código a ejecutar si la condición es falsa
}
```

- **switch**: Permite ejecutar un bloque de código entre múltiples alternativas.

```javascript
switch (expresion) {
    case valor1:
        // bloque de código a ejecutar si expresion === valor1
        break;
    case valor2:
        // bloque de código a ejecutar si expresion === valor2
        break;
    default:
        // bloque de código a ejecutar si expresion no coincide con ningún caso
}
```

### Bucles

- **for**: Ejecuta un bloque de código un número determinado de veces.

```javascript
for (inicializacion; condicion; incremento) {
    // bloque de código a ejecutar en cada iteración
}
```

- **while**: Ejecuta un bloque de código mientras una condición especificada sea verdadera.

```javascript
while (condicion) {
    // bloque de código a ejecutar mientras la condición sea verdadera
}
```

- **do...while**: Similar al bucle `while`, pero garantiza que el bloque de código se ejecute al menos una vez.

```javascript
do {
    // bloque de código a ejecutar
} while (condicion);
```

- **for...in**: Itera sobre todas las propiedades enumerables de un objeto.

```javascript
for (var propiedad in objeto) {
    // bloque de código a ejecutar con cada propiedad del objeto
}
```

- **for...of**: Itera sobre los valores de cualquier objeto iterable (incluyendo `Array`, `Map`, `Set`, el objeto `arguments`, etc).

```javascript
for (var valor of iterable) {
    // bloque de código a ejecutar con cada valor del iterable
}
```

### Control de Flujo

- **break**: Termina el bucle actual, `switch`, o la etiqueta `label` y transfiere el control del programa a la siguiente declaración.

- **continue**: Omite la iteración actual del bucle y continúa con la siguiente iteración.

Estas estructuras de control son esenciales para crear scripts dinámicos y reactivos en JavaScript, permitiendo manejar datos y comportamientos complejos en aplicaciones web.