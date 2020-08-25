# Alcance

Un concepto muy importante en la programación es el concepto de **alcance**.

El alcance define en que partes del código se puede acceder o utilizar una variable, ya que mientras algunas variables pueden ser accedidas en cualquier parte del programa, otras solo pueden ser utilizadas en ciertas partes del código.

### Bloques
Para comprender el concepto de alcance necesitamos primero explicar brevemente que es un bloque.

Se le denomina *bloque* al código que se encuentra delimitado entre corchetes `{}`. Los bloques de código nos permiten agrupar una o más sentencias.

Ya hemos utilizado bloques antes, en funciones y estructuras de control, por ejemplo:

<p align="center">
    <img src="./img/js/alcance1.png">
</p>

### Alcance global
En el *alcance global* las variables se declaran fuera de los bloques de código. Por esto mismo, como las variables no pertenecen exclusivamente a un solo bloque pueden ser utilizadas desde cualquier parte del código.

```javascript
const nombre = "Juan";
let color = "azul";

function bienvenida(){
    console.log("¡Hola, " + nombre + "!");
}

function colorFavorito(){
    console.log("Me llamo " + nombre + " y mi color favorito es el " + color);
}
```
<p align="center">
    <img src="./img/js/alcance2.png">
</p>

Como podemos ver en el ejemplo, ambas funciones pueden utilizar las variables `nombre` y `color`.
