# Eventos

En HTML, un evento es *algo* que le sucede a un elemento y, cuando agregamos Javascript a nuestro sitio web, podemos utilizar funciones para reaccionar a estos eventos.

### Eventos HTML

Un evento en HTML puede ser algo que ocurra en el navegador o algo que haga el usuario, por ejemplo:

* Cuando una página ha terminado de cargarse.
* Cuando escribimos dentro de un campo.
* Cuando damos click a un botón.

Usualmente, cuando un evento sucede, queremos que el sitio web reaccione de alguna forma.

Utilizando Javascript podemos detectar cuado un evento sucede y reaccionar a él.

Comenzado por lo más sencillo, y volviendo a lo que aprendimos en la sección de HTML de este curso, podemos agregar el manejo de eventos como un atributo dentro de una etiqueta, en nuestro documento HTML. En este atributo podemos escribir código Javascript que se encargará de reaccionar a dicho evento.

Veamos un ejemplo:

<p align="center">
    <img src="./img/js/boton.png">
</p>

Aquí, creamos un botón, y utilizamos el evento `onclick()` para que, cuando el usuario de click sobre el botón, mostremos una alerta con el mensaje "Bienvenido".

<p align="center">
    <img src="./img/js/boton2.png">
</p>

<p align="center">
    <img src="./img/js/boton3.png">
</p>

Este ejemplo es únicamente para ilustrar el funcionamiento de los eventos, pero no se recomienda utilizar esta sintaxis, pues se considera una mala práctica de programación.

Otra forma de hacerlo, es llamando a una función definida en nuestro script.

<p align="center">
    <img src="./img/js/boton4.png">
</p>

Existe una tercera forma de hacerlo, y la que se considera la mejor práctica de programación, pero la mencionaremos más adelante.

#### Eventos HTML más comunes

Evento | Descripción
-------|------------
`onchange`|Cuando un elemento HTML ha cambiado.
`onclick`|Cuando el usuario da click sobre un elemento.
`onmouseover`|Cuando el usuario mueve el mouse sobre un elemento.
`onkeydown`|Cuando el usuario presiona una tecla.
`onload`|Cuando la página termina de cargarse.

[Aquí](https://www.w3schools.com/jsref/dom_obj_event.asp) puedes consultar una lista completa de los eventos HTML.
