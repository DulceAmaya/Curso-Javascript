# Arreglos

En javascript los arreglos son utilizados para almacenar múltiples valores en una sola variable. Podemos pensar en los arreglos como una lista de valores que deseamos almacenar en un solo sitio.

Los arreglos pueden almacenar cualquier tipo de datos y, al igual que en una lista, los elementos de un arreglo tienen una posición numerada lo que significa que podemos utilizar un índice para acceder a ellos.

### Sintaxis
Para crear un arreglo comenzamos por asignarlo a una variable. Los elementos del arreglo los encerramos entre corchetes `[]`, separando cada elemento con una coma.

<p align="center">
    <img src="./img/js/arreglos.png">
</p>

En Javascript podemos definir arreglos heterogéneos, esto es que los elementos de un arreglo pueden ser de diferentes tipos, e incluso pueden ser otros arreglos.

```javascript
let arreglo = [1, "hola", true, 20.5, undefined, [1, 2, "adios"]];
```

### Acceder a sus elementos
Como mencionamos arriba, los elementos de un arreglo se encuentra numerados, por lo que podemos utilizar su *índice* para acceder a ellos.

La numeración de los elementos en un arreglo comienza por el número 0.

Para acceder a los elemntos de un arreglo utilizamos la siguiente sintaxis.

<p align="center">
    <img src="./img/js/arreglos2.png">
</p>

Al acceder a un elemento de un arreglo, podemos asignarlo a una variable, por ejemplo.

```javascript
let miArreglo = ["pato", "pez", "gato"];
let animal = miArreglo[1]; //animal = "pez"
```
