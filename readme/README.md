# Recuperacion Proyecto3 - Criterio de Evaluación 3.a: Lenguajes de Script de Cliente

Este proyecto trata sobre los lenguajes de script que se usan en la web, especialmente JavaScript, y cómo han evolucionado a través de los años con ECMAScript. También se mencionan algunos otros lenguajes que se usan en la web.

## Lenguajes de Script de Cliente

### JavaScript
JavaScript es el lenguaje principal para hacer que las páginas web sean interactivas. A lo largo de los años, ha pasado por muchas actualizaciones bajo el estándar ECMAScript.

- **Versiones importantes:**
  - **ES3 (1999):** Introdujo cosas como el manejo de errores con `try/catch`.
  - **ES5 (2009):** Mejoró mucho JavaScript, con cosas como el modo estricto (`strict mode`), JSON y métodos para manejar arrays.
  - **ES6/ES2015 (2015):** Trajo cambios grandes, como las variables `let` y `const`, las funciones de flecha (`arrow functions`), clases, módulos y mucho más.
  - **ES7/ES2016 y siguientes:** Mejoras graduales, como `async/await`, `Array.prototype.includes` y otras optimizaciones.

- **Usos:** 
  - Manipular el DOM (la estructura de la página).
  - Hacer peticiones a servidores (con `AJAX` y `fetch`).
  - Crear aplicaciones web interactivas y en tiempo real.
  - Desarrollar aplicaciones web progresivas (PWA).

### TypeScript
TypeScript es un superset de JavaScript. Esto quiere decir que todo lo que puedes hacer en JavaScript también se puede hacer en TypeScript, pero además tiene tipos estáticos, lo que ayuda a evitar muchos errores antes de ejecutar el código.

- **Cómo funciona:** TypeScript se convierte en JavaScript, así que básicamente está alineado con las versiones de ECMAScript.
- **Usos:** 
  - Ayuda a evitar errores gracias a su sistema de tipos.
  - Hace que el código sea más fácil de leer y mantener, especialmente en proyectos grandes.
  - Muy usado en aplicaciones complejas.

### Dart
Dart es un lenguaje creado por Google, y aunque no es tan común en la web como JavaScript, se utiliza para aplicaciones web y móviles (especialmente con el framework Flutter).

- **Relación con ECMAScript:** Aunque Dart no sigue directamente ECMAScript, tiene muchas similitudes con JavaScript.
- **Usos:** 
  - Crear aplicaciones multiplataforma (web y móviles).
  - Es muy eficiente y rápido.

### CoffeeScript
CoffeeScript es un lenguaje que se compila a JavaScript. Tiene una sintaxis más limpia y concisa, pero no es tan popular.

- **Relación con ECMAScript:** CoffeeScript se convierte en JavaScript, así que sigue las reglas de ECMAScript.
- **Usos:** 
  - Su sintaxis es más breve y menos repetitiva que JavaScript, aunque la mayoría de la gente hoy prefiere usar JavaScript directamente.

## ECMAScript y su Evolución

ECMAScript (o ES) es el estándar que define cómo deben comportarse los lenguajes de script como JavaScript. A lo largo de los años, ECMAScript ha sido actualizado para hacer que JavaScript sea más eficiente y fácil de usar.

- **ES5 (2009):** Mejoró la estructura y capacidades de JavaScript, especialmente con `strict mode` y los métodos para trabajar con arrays.
- **ES6 (2015):** Fue una gran actualización que hizo que JavaScript fuera más moderno, con nuevas características como clases, módulos, y mucho más.
- **Versiones posteriores (ES7 y más):** Han añadido características como `async/await`, mejoras en arrays, y optimizaciones para mejorar el rendimiento.

## Conclusión

Los lenguajes de script de cliente son esenciales para el desarrollo web. JavaScript ha sido el estándar durante mucho tiempo y sigue evolucionando con ECMAScript. Otros lenguajes como TypeScript y Dart también tienen su lugar, dependiendo de las necesidades del proyecto. Cada uno tiene sus ventajas, y entender sus diferencias ayuda a elegir el más adecuado para cada situación.


# Proyecto Web - Documentación de Manipulación del DOM

Este proyecto incluye ejemplos de cómo interactuar con el DOM (Document Object Model) usando JavaScript, para modificar elementos en la página web de forma dinámica. A continuación se detallan ejemplos básicos de manipulación del DOM.

## Ejemplo 1: Manipulación de botones

En este ejemplo, hemos creado un botón que, al ser presionado, cambia a otro botón con un mensaje distinto. A continuación, te mostramos el código y cómo manipula el DOM.

```javascript
document.addEventListener('DOMContentLoaded', function() {

    // Obtener el botón por su ID
    const sithButton = document.getElementById('sith-button');

    // Agregar un evento al hacer clic en el botón
    sithButton.addEventListener('click', function() {
        // Eliminar el botón original
        sithButton.remove();

        // Crear el nuevo botón "Quiero volverme al lado oscuro"
        const newButton = document.createElement('button');
        newButton.id = 'dark-side-button';
        newButton.classList.add('links__button'); // Añadir la clase links__button
        newButton.textContent = 'Quiero volverme al lado oscuro';

        // Agregar el nuevo botón al DOM (debajo de los enlaces)
        const linksSection = document.querySelector('.links');
        linksSection.appendChild(newButton);

        // Agregar un evento al nuevo botón
        newButton.addEventListener('click', function() {
            // Acción al hacer clic en el nuevo botón
            alert("¡Has vuelto al lado oscuro!");
        });
    });

    // Funcionalidad para cambiar el tema (Modo Claro/Oscuro)
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('change', function() {
        // Si el checkbox está activado, cambiar el tema a oscuro
        if (themeToggle.checked) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    });
});


## Descripción del ejemplo

- **Obtenemos el botón por su ID**: Usamos `document.getElementById('sith-button')` para encontrar el botón en el DOM.
- **Evento de clic**: Cuando el botón es clickeado, el original se elimina con `sithButton.remove()`.
- **Crear un nuevo botón**: Usamos `document.createElement('button')` para crear un nuevo botón y luego le asignamos texto y una clase.
- **Agregar el nuevo botón al DOM**: Utilizamos `appendChild` para agregar el nuevo botón a la sección de enlaces.
- **Evento en el nuevo botón**: Al hacer clic en el nuevo botón, mostramos una alerta con el mensaje "¡Has vuelto al lado oscuro!".
- **Cambio de tema**: Además, se incluye un cambio de tema (modo claro/oscuro) con un checkbox. Si está marcado, se agrega la clase `dark-theme` al `body`.
