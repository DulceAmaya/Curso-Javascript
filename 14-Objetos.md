# Objetos

En capítulos anteriores mencionamos 5 tipos de datos primitivos del lenguaje Javascript, sin embargo, existe un sexto tipo *estructural* conocido como **objeto**.

Los objetos son una estructura básica presente en casi cada aspecto del lenguaje. Un objeto no es más que una colección de propiedades (atributos) y acciones (métodos).

Pensemos en un objeto de la vida real; un auto. Un auto tiene propiedades como un color, un modelo y una marca. Además un auto puede realizar múltiples acciones como arrancar, acelerar o frenar.

Otro ejemplo sería una persona. Una persona puede tener un nombre, edad, trabajo, hobby, nacionalidad, entre muchas otras. Y una persona puede realizar acciones como caminar, comer, dormir, trabajar, etc.

<p align="center">
    <img src="./img/js/objetos.png">
</p>

Todos los auto, o todas las personas, tienen las mismas propiedades, pero con diferentes valores y todos pueden realizar las mismas acciones.

<p align="center">
    <img src="./img/js/objetos2.png">
</p>
<p align="center">
    <img src="./img/js/objetos3.png">
</p>

Entonces, aunque tenemos dos autos con diferentes propiedades, ambos autos pueden encender, acelerar y detenerse.

### Sintaxis

Para crear un objeto en Javascript podemos asignarlo a una variable como cualquier tipo de dato, y el contenido del objeto lo delimitamos por llaves `{}`.

El contenido del objeto está organizado en pares, *llave*-*valor*

<p align="center">
    <img src="./img/js/objetos4.png">
</p>

La llave funciona como el nombre de una variable y apunta a una dirección en memoria donde se almacena el valor. El valor, correspondiente a una llave, puede se cualquier tipo de dato del lenguaje, incluyendo objetos o funciones.

### Acceder a las propiedades

Existen dos formas en que podemos acceder a las propiedades de un objeto.

##### Notación punto

La primera es utilizando la *notación punto*. Ya hemos utilizado esta notación antes, por ejemplo, para obtener la longitud de un arreglo:

```javascript
const miArreglo = ["pato", "pez", "gato"];
miArreglo.length; //3
```

Entonces para acceder a las propiedades de un objeto utilizamos la sintaxis `nombreObjeto.llave`.

```javascript
const personaje = {
    nombre : "John",
    edad : 21,
    hobbies : ["leer", "jugar videojuegos", "aprender idiomas"]
};

personaje.nombre; //"John"
personaje.hobbies; //["leer", "jugar videojuegos", "aprender idiomas"]
```

Si tratamos de acceder a una propiedad que no existe obtenemos `undefined` como resultado.

##### Notación de bracket

La segunda forma de acceder a las propiedades de un objeto es utilizando la *notación de bracket*. Y esta también la hemos utilizado antes, para acceder a los elementos de un arreglo.

```javascript
miArreglo[1]; //"pez"
```

Para acceder a las propiedades de un objeto, utilizamos la sintaxis `nombreObjeto[llave]`.

```javascript
personaje[nombre]; //"John"
```

Una gran ventaja de esta notación es que podemos utilizar variables para acceder a las propiedades de un objeto, lo cual puede ser muy útil cuando utilizamos fuciones, por ejemplo.

```javascript
function imprimePropiedad(llave){
    console.log(personaje[llave]);
}

imprimePropiedad("nombre"); //"John"
imprimePropiedad("edad"); //21
```
En este caso, dentro de la función `imprimePropiedad` utilizamos el valor de la variable `llave` como el nombre de la propiedad a la que buscamos acceder.

Esto no es posible utilizando la notación punto, pues si escribieramos algo así dentro de la función `personaje.llave` el interprete buscaría por una propiedad llamada `llave` dentro del objeto.

### Asignar propiedades

Los objetos en Javascript son mutables, esto quiere decir que podemos actualizarlos después de crearlos.

Para esto, podemos usar cualquiera de las dos notaciones vistas arriba, además del operador de asignación, ya sea que agreguemos una nueva llave y un nuevo valor, o actualicemos el valor de una llave existente.

```javascript
const personaje = {
    nombre : "John",
    edad : 21,
    hobbies : ["leer", "jugar videojuegos", "aprender idiomas"]
};

personaje.nombre = "Bill";
personaje.colorFavorito = "rojo";
```

Como vemos en el ejemplo, en el primer caso actualizamos el valor de la propiedad `nombre`, pero en el segundo, como accedemos a una propiedad que originalmente no existe, `colorFavorito`, esta propiedad se crea con el valor que le estamos asignando.

### Métodos

Como mencionábamos al principio además de tener características un objeto también puede realizar acciones, dichas acciones se denominan *métodos*.

Lo cierto es que ya hemos utilizado métodos antes; `console` es un objeto de Javascript y `log()` un método de este objeto.

Para crear un método en nuestro objeto utilizamos la misma sintaxis que describimos para las propiedades. El nombre de la llave será el nombre que utilizaremos para invocar el método mientras que el valor que le asignaremos será una función anónima, es decir, una función sin nombre.

```javascript
const personaje = {
    nombre : "John",
    edad : 21,
    hobbies : ["leer", "jugar videojuegos", "aprender idiomas"],
    presentar : function(){
        console.log(`Hola, me llamo ${personaje.nombre} y me gusta ${personaje.hobbies[0]}`);
    }
};
```

Para invocar el métod de un objeto utilizamos la sintaxis `nombreObjeto.metodo()`.

```javascript
personaje.presentar(); //Hola, me llamo John y me gusta leer
```

### La palabra reservada *this*

Cuando definimos un método para un objeto, la palabra reservada `this` se refiere al objeto padre de dicho método.

Siguiendo con nuestro objeto personaje, definimos la función `presentar()` que utiliza las propiedades `nombre` y `hobbies` del objeto para imprimir una presentación.

```javascript
const personaje = {
    nombre : "John",
    edad : 21,
    hobbies : ["leer", "jugar videojuegos", "aprender idiomas"],
    presentar : function(){
        console.log(`Hola, me llamo ${personaje.nombre} y me gusta ${personaje.hobbies[0]}`);
    }
};
```

Entonces, en lugar que escribir `personaje.nombre` para acceder al nombre del personaje, podemos escribr `this.nombre`, pues con `this` estamos haciendo referencia al objeto al que pertenece el método `presentar()` que en este caso es el objeto personaje.

```javascript
const personaje = {
    nombre : "John",
    edad : 21,
    hobbies : ["leer", "jugar videojuegos", "aprender idiomas"],
    presentar : function(){
        console.log(`Hola, me llamo ${this.nombre} y me gusta ${this.hobbies[0]}`);
    }
};
```
