# Hooks en React

Los Hooks son una adición en React 16.8 que permiten usar estado y otras características de React sin escribir una clase. Los Hooks ofrecen una forma más directa de usar las características de React desde funciones, facilitando la escritura de componentes.

## useState

El Hook `useState` permite agregar estado local a componentes funcionales. Retorna un par de valores: el estado actual y una función que permite actualizarlo.

```javascript
import React, { useState } from 'react';

function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <p>{contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </div>
    );
}
```

## useEffect

El Hook `useEffect` permite realizar efectos secundarios en componentes funcionales. Puede ser utilizado para operaciones de datos, suscripciones, o manualmente cambiar el DOM de React.

```javascript
import React, { useState, useEffect } from 'react';

function Ejemplo() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        document.title = `Has clickeado ${contador} veces`;
    });

    return (
        <div>
            <p>{contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </div>
    );
}
```

## useContext

El Hook `useContext` permite suscribirse a datos de React context sin introducir anidamiento.

```javascript
import React, { useContext } from 'react';
const TemaContext = React.createContext();

function Componente() {
    const tema = useContext(TemaContext);
    return <div>{tema}</div>;
}
```

## Otros Hooks

React incluye otros Hooks como `useReducer`, `useCallback`, `useMemo`, y `useRef`. También es posible crear Hooks personalizados para reutilizar lógica de estado entre componentes.

## Ventajas de los Hooks

- **Simplicidad**: Los Hooks permiten escribir componentes más simples y menos verbosos en comparación con las clases.
- **Reutilización de lógica**: Facilitan la reutilización de lógica de estado sin la necesidad de componentes de alto orden o render props.
- **Organización del código**: Permiten organizar la lógica relacionada en un solo lugar, haciendo el código más limpio y fácil de entender.

Los Hooks representan un cambio significativo en la forma de escribir componentes en React, ofreciendo una alternativa más poderosa y flexible a los componentes de clase.