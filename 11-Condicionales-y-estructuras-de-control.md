#  Condicionales y estructuras de control


<p align="center">
    <img src="./img/estructura-control.png" width="700px" height="500px">
</p>


Como en cualquier lenguaje, las estructuras de control nos dan control sobre el flujo de ejecución de nuestro programas. Igual que muchos lenguajes, Javascript cuenta con algunas estructuras de control que funcionan casi igual en principio a las de otros lenguajes.  

## If-else if-else

Quizá sea la estructura de control más elemental y su estructura es la siguiente:  

```Javascript
    if (condicion-uno) {
      //  código si evalúa a verdadero
    } else if (condicion-dos) {
      //  código si evalúa a verdadero si al condición uno es falsa
    } else {
      //  código si las dos primeras condiciones son falsas
    }
```  
Las llaves y paréntesis forman una parte importante de la estructura, mientras que en el paréntesis tenemos la o las condiciones a evaluar, las llaves delimitan el bloque de código correspondiente a la condición.  


Una estructura if-else nos permite dividir el código (comportamiento) de cierta parte del programa dependiendo el cumplimiento de ciertas condiciones.  

<p align="center">
    <img src="./img/if-else.png" width="600px" height="500px">
</p>

Podemos ver un ejemplo a continuación:  

<p align="center">
    <img src="./img/ciclos-01.png">
</p>

Hagamos un ejercicio pequeño y común con la estructura **If-else** donde podamos aplicar conceptos aprendidos previamente de paso, veamoslo siguiente:  

"**Diseñar un script que permita saber si un año es bisiesto. Un año sea bisiesto debe ser divisible por 4 y no debe ser divisible por 100, excepto que también sea divisible por 400.**"

```javascript
    var year = window.prompt("Escribe un año");
    if(year%4 == 0){
        if((year%100 != 0) || (year%400 == 0)){
            console.log("Bisiesto");
        }else{
            console.log("No bisiesto");
        }
    }else{
        console.log("No es bisiesto");
    }
```  
## Switch

La estructura switch surge de un concepto conocido como **caza de patrones**, la idea es que dada una "expresión" de algún tipo se evalue y se ejecute el código correspondiente a ese **caso**. Algunos lenguajes como python no implementan ésta estructura pero es facil implementarlo usando la estructura **if-else if-else**.

La estructura del switch es la siguiente:  
```Javascript
    switch(expresion){    
        case x:
        // bloque de código
            break;
        case y:
        // bloque de código
            break;
        default:
            continue;
    }
``` 

Los pasos que se ejecutan en una **estructura switch** son:  
    1. The switch expression is evaluated once.  
    2. The value of the expression is compared with the values of each case.  
    3. If there is a match, the associated block of code is executed.  
    4. If there is no match, the default code block is executed.  
