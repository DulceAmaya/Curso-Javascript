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

### Obtener elementos

Para acceder o recuperar elementos del documento HTML existen métodos que podemos utilizar en nuestro script. Estos métodos nos permiten recuperar elementos HTML utilizando su *id*, *clase* o *etiqueta*.

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

Al igual que con el caso  anterior, podemos utilizar un elemento en lugar de `document` para buscar todos los objetos con determinada etiqueta únicamente dentro de dicho elemento.


### Modificar elementos

Además de recuperar los elementos HTML, podemos modificar su contenido, sus atributos y su estilo de manera dinámica.

##### innerHTML

Esta propiedad nos permite recuperar o modificar el contenido HTML de un elemento.

Utilizando la sintaxis `elemento.innerHTML` nos devuelve el contenido HTML del elemento representado como una cadena.

<p align="center">
    <img src="./img/js/innerHTML2.png">
</p>

<p align="center">
    <img src="./img/js/innerHTML.png">
</p>

<br>

Por otro lado, utilizando el operador de asignación, podemos asignarle un nuevo contenido a un elemento HTML.

<p align="center">
    <img src="./img/js/innerHTML3.png">
</p>

<p align="center">
    <img src="./img/js/innerHTML4.png">
</p>


Como podemos ver al imprimir en la consola el contenido del `div`, el elemento `h1` que había dentro del `div` ha sido sustituido por la cadena `Hemos camibiado el contenido del div`;

Para que la nueva cadena aparezca también como un encabezado, debemos hacer lo siguiente:

<p align="center">
    <img src="./img/js/innerHTML5.png">
</p>

<p align="center">
    <img src="./img/js/innerHTML6.png">
</p>

La propiedad `innerHTML` interpreta la cadena que le pasamos como HTML y no como texto plano, por eso, al agregar por ejemplo, las etiquetas de apertura y cierre para `<h1> </h1>`, el texto aparece en el sitio web como un encabezado.

Así podríamos, entonces, sustituir el contenido de nuestro `div` por una imagen, por ejemplo.

<p align="center">
    <img src="./img/js/innerHTML7.png">
</p>

<p align="center">
    <img src="./img/js/innerHTML8.png">
</p>


##### attribute

Utilizamos la propiedad de `atributo` para recuperar y/o modificar un atributo de un elemento HTML.

La sintaxis `elemento.atributo` nos permite recuperar el atributo especificado de un determinado elemento HTML.

<p align="center">
    <img src="./img/js/attribute.png">
</p>

<p align="center">
    <img src="./img/js/attribute2.png">
</p>

<br>

Al utilizar el operador de asignación, podemos asignarle un nuevo valor a un atributo.

<p align="center">
    <img src="./img/js/attribute3.png">
</p>

<p align="center">
    <img src="./img/js/attribute4.png">
</p>

##### style.property

Utilizamos la propiedad `style.property` para asignar un nuevo estilo a un elemento HTML

<p align="center">
    <img src="./img/js/styleProperty.png">
</p>

<p align="center">
    <img src="./img/js/styleProperty2.png">
</p>

Esta propiedad agrega el estilo al elemento de forma `inline`, esto es, como un atributo dentro de la etiqueta.

[Aquí](https://www.w3schools.com/jsref/dom_obj_style.asp) puedes consultar la lista con el nombre de todas las propiedas que puedes utilizar para dar estilo a los elementos HTML utilizando Javascript.

### Agregar y Eliminar elementos

Además de obtener y modificar los elementos existentes en nuestra página web podemos crear nuevos, así como eliminarlos.

##### createElement() y appendChild()

Para crear un nuevo elemento HTML usamos el método `createElement()`, y utilizamos al objeto `document` para invocarlo.

Este método recibe como parámetro una cadena con el nombre del elemento que deseamos crear.

```javascript
let parrafo = document.createElement("p");
```

Este método solamente crea un elemento HTML, sin embargo, para asignarle un contenido debemos utilizar la propiedad `innerHTML`.

```javascript
let parrafo = document.createElement("p");
parrafo.innerHTML = "Este es un párrafo";
```

Ahora si, nuestro elemento se vería de la forma:

```HTML
<p>Este es un párrafo</p>
```

Una vez que hemos creado el elemento podemos utilizar el método `appendChild()` para agregarlo a nuestra página web.

Para esto debemos invocar el método utilizando otro elemento HTML, este elemento se convertirá en el padre de nuestro nuevo elemento.

Veamos un ejemplo:

Inicialmente, así luce el documento HTML de nuestra página web.

<p align="center">
    <img src="./img/js/crearElemento.png">
</p>

Supongamos que deseamos crear un párrafo y una imagen dentro del `div`.

Comencemos por el párrafo.

<p align="center">
    <img src="./img/js/crearElemento2.png">
</p>

Como podemos ver en el código, debemos recuperar el `div` (podemos hacerlo utilizando su id), para poder invocar el método `appendChild()` y de este forma el nuevo párrafo se agregará anidado dentro del `div`.

<p align="center">
    <img src="./img/js/crearElemento3.png">
</p>

En la pestaña de Elements de las Herramientas del Desarrollador del navegador podemos ver que, en efecto, ahora dentro del `div` aparece nuestro párrafo.

Para agregar una imagen debemos seguir un proceso similar.

<p align="center">
    <img src="./img/js/crearElemento4.png">
</p>

En este caso, la etiqueta `img` necesita que le asignemos algunos atributos, `src` y `width`; para esto utlizamos la propiedad `attribute` que vimos antes.

Cada vez que llamemos al método `appendChild()` agregará el nuevo elemento al final de los elementos ya existentes; en este caso, la imagen se agrega después de del párrafo.

<p align="center">
    <img src="./img/js/crearElemento5.png">
</p>

##### removeChild()

Para eliminar un elemento, utilizamos el método `removeChild()`. Para invocarlo debemos utilizar un elemento, que debe ser el padre del elemento que deseamos eliminar, y el método recibe como parámetro el elemento a eliminar.

Veamos algunos ejemplos.

<p align="center">
    <img src="./img/js/removeChild.png">
</p>

<p align="center">
    <img src="./img/js/removeChild2.png">
</p>

Supongamos que deseamos eliminar el botón número 2. Para esto, debemos recuperar el div, pues es el padre del elemento que deseamos eliminar; por otro lado, podemos recuperar los botones usando su clase, para así, obtener el elemento que deseamos eliminar.

<p align="center">
    <img src="./img/js/removeChild3.png">
</p>

<p align="center">
    <img src="./img/js/removeChild4.png">
</p>
