# Documentación del Proyecto Pokedex

Este proyecto es una implementación de una Pokedex utilizando JavaScript y la API de Pokemon, PokeAPI.
Utiliza la [API de Pokemon, PokeAPI](https://pokeapi.co/), para obtener información sobre los Pokemon.

## Estructura del Proyecto

El proyecto consta de un archivo principal `index.html` que contiene toda la estructura de la web, un archivo css `main.css` para el estilo de ella, una carpeta que almacena la imagen de "Pokedex" y un archivo `main.js` que contiene toda la lógica del programa.

### Código Principal

El código principal de la aplicación se encuentra en el archivo `main.js`. Aquí es donde se realizan las solicitudes a la API de Pokemon y se manejan los eventos del usuario.

#### Función mostrarPokemon

Esta función toma un objeto de Pokemon devuelto por la API de Pokemon y crea un nuevo elemento div que contiene la información del Pokemon. Este div se agrega a `listaPokemon`, que es un elemento del DOM que contiene la lista de Pokemon.

#### Evento de Click en botonesHeader

Este es un evento de click que se adjunta a cada botón en `botonesHeader`. Cuando se hace clic en un botón, se realiza una solicitud a la API de Pokemon para cada Pokemon en la generación original (151 Pokemon). Dependiendo del ID del botón que se hizo clic, se filtran los Pokemon por tipo y se muestran en `listaPokemon`.

### Uso de la API de Pokemon

Este proyecto utiliza la API de Pokemon, PokeAPI, para obtener información sobre los Pokemon. Las solicitudes se realizan utilizando la función fetch de JavaScript.

## Conclusión

Este proyecto es una simple implementación de una Pokedex utilizando JavaScript y la API de Pokemon. Es un buen ejemplo de cómo utilizar las APIs y manejar eventos de usuario en JavaScript. El proyecto se realizo para aprender a programar en JavaSript y la utilización de alguna API. 

Se utilizo este video para realizar el proyecto [Video](https://www.youtube.com/watch?v=drXkf_rytRs)