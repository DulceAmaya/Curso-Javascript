# Tipos de datos

Un programa de computadora funciona manipulando valores, como números, textos, listas, etcétera. Los diferentes valores que se pueden representar y manipular en un lenguaje de programación se conocen como *tipos*, y una de las principales características de un lenguaje de programación es el tipo de datos de admite.

En Javascript, existen 5 tipos de datos *primitivos*.

### Number
A diferencia de otros lenguajes de programación, Javascript no hace ninguna distinción entre números enteros y números de punto flotante. *Todos los números en Javascript son representados como valores de punto flotante*.

<p align="center">
    <img src="./img/js/number.png">
</p>

### String
Una cadena consiste de cualquier secuencia de caracteres que puedes encontrar en tu teclado (letras, números, símbolos, espacios, etcétera). El tipo de dato string es la forma que utiliza Javascript para representar texto.

Para representar una cadena, debemos encerrar el texto entre comillas, ya sea dobles `"..."`  o sencillas `'...'`.

<p align="center">
    <img src="./img/js/string.png">
</p>

### Boolean
Este tipo de dato solo acepta dos posibles valores: `true` o `false`. Es sencillo pensar en los valores booleanos como una respuesta a una pregunta de *si* o *no*.

<p align="center">
    <img src="./img/js/boolean.png">
</p>

Como podemos ver, en el primer ejemplo preguntamos si *5 es mayor que 7*, y obtenemos como respuesta `false`. Por otro lado, en el segundo ejemplo, preguntamos si *10 es igual a 10* a lo que obtenemos `true` como respuesta.

### Null
`null` es una palabra reservada del lenguaje, utilizada para referirse a un valor especial que indica la *ausencia de un valor* o de un tipo de dato.

### Undefined
`undefined` es otra palabra reservada del lenguaje, que al igual que `null`, representa la ausencia de un valor, aunque funciona de manera diferente.

`undefined` se utiliza para aquellas variables a las cuales no se les ha asignado un tipo de dato.

# Variables
Una variable funciona como un caja que contiene a un valor. En una variable podemos *asignar* valores como un nombre de usuario, una contraseña, una fecha de nacimiento, o una lista de cosas por hacer, que se almacenan en la memoria de la computadora y que podemos recuperar cuando necesitemos utilizarlos. Estos valores son datos primitivos, objetos y funciones.

Las variables nos permiten, además, etiquetar información de manera descriptiva, de modo que nos facilita su uso y entendimiento en nuestro código.

En pocas palabras, las variables nos permiten etiquetar y almacenar valores en la memoria de la computadora para utilizarlos después.

<p align="center">
    <img src="./img/js/variables.png">
</p>

Existen diferentes formas en que podemos crear o *declarar* estas variables, además de ciertas convenciones que siguen los programadores para hacer el código más entendible.

### var
En 2015, la versión de ES6 de Javascript presentó algunos cambios importantes, uno de ellos siendo la forma en que se declaraban variables. Aunque ahora es cada vez menos común, aún podemos encontrarnos con la palabra reservada `var` para crear una variable.

```javascript
var nombre = "Juan";
```

* La palabra reservada `var` le indica al navegador que estamos creando una nueva variable.

* `nombre` es el nombre de la variable.

* `=` es el *operador de asignación* que se encargar de asignarle un valor a nuestra variable.

* `"Juan"` es el valor que le estamos asignando a la variable en cuanto la creamos. Podemos decir entonces que la varible `nombre` se *inicializa* con el valor de `"Juan"`.

Ahora, en lugar de hacer algo como esto, que habíamos visto en un ejemplo anterior:
<p align="center">
    <img src="./img/js/var.png">
</p>

Podemos hacer algo así:
<p align="center">
    <img src="./img/js/var2.png">
</p>

Ahora, al método `console.log()` no le estamos indicando directamente que valor imprimir, si no que le estamos diciendo que imprima el valor almacenado en la variable `nombre`.

Además de asignar un valor a una variable, podemos actualizar el valor de una variable existente.

Continuando con el ejemplo anterior, hemos inicializado la variable `nombre` con el valor `"Juan"`, pero podemos cambiar su valor para que ahora, `nombre` contenga el valor `"Pedro"`. Para hacer esto no es necesario volver a utilizar la palabra reservada `var`, basta con indicar que valor le será asignado a la variable, utilizando el operador de asignación, `=`.

```javascript
nombre = "Pedro";
```

Entonces, ahora, al imprimir el valor de `nombre` obtendríamos el siguiente resultado:
<p align="center">
    <img src="./img/js/var3.png">
</p>

Javascript es un lenguaje de programación **débilmente tipado**, lo que significa que, al declarar una variable, no es necesario especificar el tipo del valor que le asignaremos. Como resultado, podemos actualizar el valor de una variable por cualquier tipo de dato, sin importar el valor con el que fue inicializada.

Continuando con el ejemplo de arriba, entonces podemos, por ejemplo, asignar a `nombre` un número.
<p align="center">
    <img src="./img/js/var4.png">
</p>

<br>
Es importante tener en cuenta que no es necesario asignar un valor a la variable para declararla. En tal caso, la variable sería inicializada con el valor de `undefined`.
<p align="center">
    <img src="./img/js/var5.png">
</p>

<br>

Para nombrar a los identificadores (nombre de variables y funciones), utilizamos algo que se conoce como **camel case**. Esta es una convención seguida por los programadores, después de todo no es obligatorio hacerlo para que el código funcione, pero se considera una buena práctica de programación que facilita la lectura y legibilidad de nuestro código. Para esto, el nombre de un identificador debe comenzar *con letra minúscula* y, si está compuesto por más de una palabra, *las siguientes palabras se escribirán comenzando con letra mayúscula*, sin dejar ningún espacio.

```javascript
var comidaFavorita = "pizza";
var numeroDeMascotas = 3;
```

Hay ciertos puntos que es importante recordar para nombrar una variable:
* El nombre de un identificador puede contener tanto letras como digitos, guiones y símbolos de dolar.
* Aunque, como ya mencionamos, su nombre debe comenzar con una letra.
* Javascript es sensible a mayúsculas y minúsculas, por lo que la variable `nombre` y la variable `Nombre` no serían la misma.
* Las palabras reservadas no pueden ser utilizadas para nombrar variables.

### let
La palabra reservada `let` es una de las adiciones hechas al lenguaje en la versión ES6 y, actualmente, es la forma más utilizada para declarar variables.

```javascript
let x = 5;
let esPar = true;
```
