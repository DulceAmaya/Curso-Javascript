# Manipulación del DOM

Como mencionamos al comienzo del curso, el uso en conjunto de HTML, CSS y Javascript es lo que nos permite diseñar una página web que, no solo luzca bien, pero que también sea funcional. Entonces, ahora que hemos aprendido los conceptos básicos de los tres leguajes, es momento de integrarlos.

Uno de los puntos esenciales en la construcción de nuestra página web es el esqueleto de nuestro documento HTML, y más aun, el poder modificarlo de manera dinámica; para esto utilizamos Javascript.

### ¿Qué es el HTML DOM?

DOM, por sus siglas en ingles *Document Object Model*, se refiere a la jerarquía de los objetos que componen una página web. Este modelo de objetos defineL:
* Los elementos HTML como objetos.
* Las propiedades de todos los elementos HTML.
* Los métodos para acceder a todos los elementos HTML.
* Los eventos para todos los elementos HTML.

Esta jerarquía se construye como un Árbol de objetos.

<p align="center">
    <img src="./img/js/DOM.png">
</p>

<p align="center">
    <img src="./img/js/DOM2.png">
</p>

Podemos ver que la jerarquía se refiere al orden en que las etiquetas se encuentran anidadas en nuestro documento HTML.

Este Árbol de objetos es creado por el navegador cada vez que se carga un sitio web y esto facilita el acceso a los elementos del documento HTML usando Javascript.

Entonces, utilizando Javascript podemos modificar de forma dinámica nuestro documento, esto es:

* Modificar los elementos HTML.
* Cambiar los atributos de los elementos.
* Cambiar el estilo (CSS) de la página.
* Crear o eliminar elementos y atributos.
* Crear y reaccionar a eventos HTML.

### Eventos

Antes de comenzar con la manipulación del DOM, hay concepto un importante que debemos cubrir y este es el de los eventos.

Como ya mencionamos al inicio del curso, Javascript trabaja en conjunto con HTML para crear sitios web funcionales y dinámicos.

Una de las partes esenciales en la creación de estos sitios web son los *eventos*.

En HTML, un evento es *algo* que le sucede a un elemento y, cuando agregamos Javascript a nuestro sitio web, podemos utilizarlo para reaccionar a estos eventos.

##### Eventos HTML

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

##### Eventos HTML más comunes

Evento | Descripción
-------|------------
`onchange`|Cuando un elemento HTML ha cambiado.
`onclick`|Cuando el usuario da click sobre un elemento.
`onmouseover`|Cuando el usuario mueve el mouse sobre un elemento.
`onkeydown`|Cuando el usuario presiona una tecla.
`onload`|Cuando la página termina de cargarse.

[Aquí](https://www.w3schools.com/jsref/dom_obj_event.asp) puedes consultar una lista completa de los eventos HTML.

### El objeto `document`

El objeto `document` del HTML DOM es el padre de todos los otros objetos en el sitio web. Entonces, para poder acceder a cualquier otro elemento del sitio web, comenzamos por acceder a `document`.

```javascript
document.title; //"Mi primer página web"
```

<p align="center">
    <img src="./img/js/document.png">
</p>

Aquí, por ejemplo, estamos recuperando el titulo de nuestra página web.

### Interfaz de programación del DOM

Como ya mencionamos arriba, en el DOM todos los elementos HTML se definen como objetos, a los cuales podemos acceder utilizando Javascript.

La *interfaz de programación* del DOM se refiere a las propiedades y métodos de cada objeto.

* **Propiedad** es un valor de objeto que puedes obtener y/o cambiar (por ejemplo cambiar el contenido de un elemento).
* **Método** es una acción que puedes realizar sobre un objeto (por ejemplo eliminar un elemento).

### Métodos

Los métodos más comunes, son los métodos utilizados para recuperar elementos HTML utilizando su *id*, *clase* o *etiqueta*.

##### Por id
El método `getElementById()` nos permite obtener un objeto del DOM utilizando el nombre de su id.

<p align="center">
    <img src="./img/js/domMetodos.png">
</p>

<p align="center">
    <img src="./img/js/domMetodos2.png">
</p>

Como podemos ver al imprimirlo en la consola, obtenemos todo el elemento: la etiqueta de inicio y cierre, los atributos y el contenido.

##### Por clase

Utilizamos el método `getElementsByClassName` para obtener **todos** los elementos con una misma clase asignada.

Los objetos los recuperamos como una `HTMLCollection` que representa una colección genérica y podemos acceder a sus elementos utilizando índices, de la misma forma que a los elementos de un arreglo.

<p align="center">
    <img src="./img/js/domMetodos3.png">
</p>

<p align="center">
    <img src="./img/js/domMetodos4.png">
</p>

Cuando utilizamos `document.getElementsByClassName()` estamos buscando los objetos en todo el documento, sin embargo, podemos llamar al método utilizando otro elemento (que no sea document), con lo que buscaríamos solamente dentro de los objetos hijos de dicho elemento.

Veamos un ejemplo:

<p align="center">
    <img src="./img/js/domMetodos7.png">
</p>

Aquí primero recuperamos el div con id `raiz`, y después, recuperamos todos los elementos con la clase `mensaje` que se encuentren dentro del div.

<p align="center">
    <img src="./img/js/domMetodos8.png">
</p>

Podemos ver que solo recuperamos el elemento con el mensaje "Este elemento esta dentro del div", a pesar de que hay otros 2 elementos con la misma clase, esto es porque solo recuperamos los elementos con la clase `mensaje` dentro del div.

##### Por etiqueta

Utilizamos el método `getElementsByTagName` para obtener **todos** los elementos con una misma etiqueta sin importar el id o clase que tengan asignados.

Al igual que con `getElementsByClassName`, recuperamos los elementos como una `HTMLCollection`.

<p align="center">
    <img src="./img/js/domMetodos5.png">
</p>

<p align="center">
    <img src="./img/js/domMetodos6.png">
</p>

Al igual que con el caso  anterior, podemos utilizar un elemento en lugar de `document` para buscar por todos los objetos con determinada etiqueta únicamente dentro de dicho elemento.
