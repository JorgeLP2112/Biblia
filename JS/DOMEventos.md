# Manipulación del DOM y Eventos en JavaScript

JavaScript juega un papel crucial en el desarrollo web moderno, permitiendo a los desarrolladores crear páginas web interactivas y dinámicas. Una parte fundamental de esta capacidad es la manipulación del Document Object Model (DOM) y el manejo de eventos.

## Manipulación del DOM

El DOM es una representación en forma de árbol de todos los elementos de una página web. JavaScript puede manipular el DOM para cambiar el contenido, la estructura y el estilo de la página web.

### Acceso y Modificación de Elementos

- **Acceder a Elementos**: Puedes acceder a elementos del DOM usando métodos como `document.getElementById()`, `document.getElementsByClassName()`, y `document.querySelector()`.

```javascript
let elemento = document.getElementById('miElemento');
let clases = document.getElementsByClassName('miClase');
let primerElemento = document.querySelector('.miClase');
```

- **Modificar Elementos**: Una vez que tienes acceso a un elemento, puedes modificar su contenido, atributos y estilo.

```javascript
elemento.textContent = 'Nuevo contenido'; // Cambia el contenido del texto
elemento.setAttribute('href', 'https://www.ejemplo.com'); // Cambia el atributo href
elemento.style.color = 'red'; // Cambia el color del texto a rojo
```

### Creación y Eliminación de Elementos

- **Crear Elementos**: Puedes crear nuevos elementos y añadirlos al DOM.

```javascript
let nuevoElemento = document.createElement('div');
nuevoElemento.textContent = 'Hola, mundo!';
document.body.appendChild(nuevoElemento);
```

- **Eliminar Elementos**: También puedes eliminar elementos del DOM.

```javascript
elemento.parentNode.removeChild(elemento);
```

## Eventos en JavaScript

Los eventos son acciones o sucesos que ocurren en la página web, como clics del ratón, presionar una tecla, o cargar la página. JavaScript puede reaccionar a estos eventos.

### Añadir Manejadores de Eventos

- **addEventListener()**: Permite especificar una función que se ejecutará cuando ocurra un evento específico en un elemento.

```javascript
elemento.addEventListener('click', function() {
    console.log('Elemento clickeado');
});
```

### Eventos Comunes

- **Eventos del Ratón**: `click`, `dblclick`, `mouseover`, `mouseout`, etc.
- **Eventos del Teclado**: `keypress`, `keydown`, `keyup`.
- **Eventos de la Interfaz**: `load`, `resize`, `scroll`.

### Propagación de Eventos

- **Burbuja y Captura**: Los eventos en JavaScript se propagan en dos fases: captura y burbuja. Puedes controlar este comportamiento con el tercer argumento de `addEventListener()`.

```javascript
elemento.addEventListener('click', manejadorEvento, true); // Usar captura
elemento.addEventListener('click', manejadorEvento, false); // Usar burbuja (por defecto)
```

La manipulación del DOM y el manejo de eventos son esenciales para crear experiencias de usuario ricas e interactivas en la web. Con estas herramientas, puedes modificar dinámicamente los elementos de la página y responder a las acciones del usuario.