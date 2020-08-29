# Arreglos

En javascript los arreglos son utilizados para almacenar múltiples valores en una sola variable. Podemos pensar en los arreglos como una lista de valores que deseamos almacenar en un solo sitio.

Los arreglos pueden almacenar cualquier tipo de datos y, al igual que en una lista, los elementos de un arreglo tienen una posición numerada lo que significa que podemos utilizar un índice para acceder a ellos.

### Sintaxis
Para crear un arreglo encerramos sus elementos entre corchetes `[]` y separamos cada uno con una coma. Más comúnmente, asignamos el arreglo a una variable, para así poder darle un nombre.

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

No solo podemos acceder a un elemento en un arreglo para guardarlo en una variable, también podemos modificarlo.

```javascript
miArreglo[2] = "ratón"; //miArreglo = ["pato", "pez", "ratón"]
```
Como sabemos, el valor de una variable `const` no puede ser reasignado, sin embargo, sin embargo los elementos de un arreglo declarado con `const` si pueden ser modificados.

```javascript
const numeros = [1, 2, 3, 4, 5];
numeros[2] = 10; //numeros = [1, 2, 10, 4, 5]
```

### Longitud de un arreglo
Una de las propiedades de los arreglos es su longitud. Podemos recuperar la longitud de un arreglo utilizamos la palabra reservada `length`.

```javascript
const numeros = [1, 2, 3, 4, 5];
let longitud = numeros.length; //longitud = 5
```
