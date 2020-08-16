# Funciones

En programación, una función es un bloque de código diseñado para realizar una determinada tarea, con el propósito de escribir dicho bloque de código una sola vez pero utilizarlo múltiples veces. Estas funciones se ejecutan al ser *invocadas* en alguna otra parte el programa.

### Sintaxis
En Javascript una función es definida con la palabra reservada `fuction`, seguida de un identificador (nombre), y paréntesis.

La funciones suelen nombrarse siguiendo la misma convención que las variables (camel case).

Los paréntesis `()` contienen los parámetros que recibirá la función, cada uno separado por una coma. Pueden quedar vacíos si la función no necesita parámetros.

El código que se ejecutará al invocar la función está delimitado por `{}`.

<p align="center">
    <img src="./img/js/funciones.png">
</p>

### Invocación
Arriba explicamos como definir o crear una función, sin embargo, para poder utilizarla debemos *invocarla*, esto es, llamarla o utilizarla en alguna otra parte del código.

<p align="center">
    <img src="./img/js/invocarFuncion.png">
</p>

Aquí, solo hemos creado la función `miFuncion`, por lo que no ocurre nada más, hasta que la llamamos utilizando *argumentos*.

<p align="center">
    <img src="./img/js/invocarFuncion2.png">
</p>

`miFuncion`, necesita conocer los valores de `p1` y `p2` para poder imprimir en la consola el resultado de su suma, es por esto que, al invocarla, debemos indicarle cuales son estos valores, estos son los *argumentos*.

En este ejemplo, los argumentos de `miFuncion` son `4` y `7`, por lo tanto, al ejecutar `miFuncion`, tendríamos que `p1 = 4` y `p2 = 7`;
