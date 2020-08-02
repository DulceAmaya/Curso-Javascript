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

`undefined` se utiliza para aquellas variables a la cuales no se les ha asignado un tipo de dato.
