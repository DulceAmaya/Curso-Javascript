# Manipulación del DOM

Como mencionamos al comienzo del curso, el uso en conjunto de HTML, CSS y Javascript es lo que nos permite diseñar una página web que, no solo luzca bien, pero que también sea funcional. Entonces, ahora que hemos aprendido los conceptos básicos de los tres leguajes, es momento de integrarlos.

Uno de los puntos esenciales en la construcción de nuestra página web es el esqueleto de nuestro documento HTML, y más aun, el poder modificarlo de manera dinámica; para esto utilizamos Javascript.

### ¿Qué es el DOM?

DOM, por sus siglas en ingles *Document Object Model*, se refiere a la jerarquía de los objetos que componen una página web.

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
