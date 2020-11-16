let peliculas = ["Titanic", "Cenicienta", "Pulp Fiction", "Avatar", "Joker", "Toy Story", "Avengers", "Cars", "Batman Inicia", "Baby Driver", "Shrek", "Lalaland", "Monsters Inc", "El Padrino", "Sharknado", "Mulan", "Megamente", "Iron Man", "El transportador", "Enredados", "La Familia Adams", "Interestelar", "Venom", "Jumanji"];

let letras = [];
let intentos = 1;
let letrasUsadas = [];
let letrasFaltantes = 0;
let puntaje = 0;

/*
 * Función que comienza el juego. Selecciona aleatoriamente una palabra del arreglo de palabras existente.
 */
function comenzarJuego(){
    const indice = Math.floor(Math.random() * peliculas.length);

    //Limpiamos la entrada
    let input = document.getElementById("entrada-letra");
    input.value = "";
    console.log("done");

    nuevaPalabra(peliculas[indice]);
    letraSeleccionada();
}

/*
 * Función que crea las casillas para una nueva palabra;
 */
function nuevaPalabra(cadena){
    //Creamos un arreglo de letras con la palabra seleccionada.
    letras = Array.from(cadena);

    //Para cada letra en el arreglo letras, si letra es distinta de " ", incrementamos en 1 letrasFaltantes.
    letras.forEach(letra => {
        if(letra !== " ")
            letrasFaltantes++;
    });

    //Obtenemos el contenedor donde irán las casillas.
    let contenedor = document.getElementsByClassName("contenedor-palabra");

    //Por cada letra en el arreglo creamos una casilla.
    letras.forEach(letra => {
        let casilla = document.createElement("div");
        //Si hay un espacio creamos un div con la clase "espacio".
        if(letra === " ")
            //Le asignamos dos clases al elemento.
            casilla.setAttribute("class", "palabra espacio");

        //En otro caso creamos el div con la clase "letra".
        else
            //Le asignamos dos clases al elemento.
            casilla.setAttribute("class", "palabra letra");
        contenedor[0].appendChild(casilla);
    });
}

/*
 * Función que detecta cuando una letra ha sido seleccionada.
 */
function letraSeleccionada(){
    //Esta expresión regular acepta letras mayúsculas, minúsculas y con acentos.
    let letraValida = /^[A-Za-zÁ-ú]+$/;

    //Obtenemos el elemento input
    let input = document.getElementById("entrada-letra");

    input.addEventListener("input", (e) => {
        //El atributo e.data nos permite obtener el texto ingresado por el usuario.
        let letra = e.data;
        //Verificamos que la entrada del usuario sea aceptada por la expresión regular.
        if(letra.match(letraValida)){
            //Si es así, llamamos a la función encargada de continuar con el juego
            letraIngresada(letra);
        }
        //Si no es una letra válida, no hacemos nada.

        //Vamos a limpiar el campo de entrada después de 300 milisengundos.
        setTimeout(() => {input.value="";},300);
    });
}

/*
 * Función que verificia si la letra ingresada es válida.
*/
function letraIngresada(letra){
    //Si la letra ya fue utilizada muestra una alerta.
    if(letrasUsadas.includes(letra))
        alert("Esa letra ya la has usado");
    //En otro caso verifica si la letra ingresada es correcta.
    else{
        if(incluyeLetra(letra))
            letraCorrecta(letra);
        else
            letraIncorrecta();
        //Agregamos la letra utilizada al arreglo.
        letrasUsadas.push(letra);
    }
}

/*
 * Función auxiliar que busca si la palabra incluye una letra, mayúscula o minúscula
 */
function incluyeLetra(letra){
    //En cuanto encuetra la primer ocurrencia de letra en el arreglo letras (ya sea mayúscula o minúscula) devuelve true.
    let n = 0;
    while(n < letras.length){
        if(letras[n] == letra || letras[n] == letra.toUpperCase())
            return true;

        n++;
    }
    //Si no encontró ninguna, devuelve false.
    return false;
}

/*
 * Función auxiliar que devuleve un arreglo con los índices del arreglo letras donde aparece l.
 */
function getIndices(letra){
    let indices = [];

    for(let i = 0; i < letras.length; i++){
        //Para la letra en la posición i, si es igual a la letra ingresada por el usuario, agregamos el índice a i al arreglo.
        if(letras[i] === letra || letras[i] === letra.toUpperCase())
            indices.push(i);
    }

    return indices;
}

/*
 * Función para cuando la letra seleccionada es correcta.
 */
function letraCorrecta(letra){
    //Obtenemos los índices donde aparece letra.
    let indices = getIndices(letra)
    //Si la letra es correcta disminuimos el contador de letras faltantes.
    letrasFaltantes -= indices.length;
    let casillas = document.getElementsByClassName("palabra");
    //Por cada índice en donde aparece la letra la mostramos en la casilla correspondiente.
    for(let i = 0; i < indices.length; i++){
        let casilla = casillas[indices[i]];
        let texto = document.createTextNode(letras[indices[i]]);
        casilla.appendChild(texto);
    }

    if(letrasFaltantes == 0)
        ganar();
}

/*
 * Función para cuando la letra seleccionada es incorrecta.
 */
function letraIncorrecta(){
    intentos++;
    //Escribimos como una cadena la dirección de la nueva imagen.
    let imagenString = "img/" + intentos + ".png";
    //Recuperamos el elemento de la imagen actual y le asignamos la nueva dirección.
    document.getElementById("imagen").src = imagenString;

    //Después del sexto intento termina el juego.
    if(intentos === 7)
        perder();
}

/*
 * Función para cuando ganamos el juego.
 */
function ganar(){
    // Incrementamos el puntaje en 1.
    //Recuperamos el contenedor por su nombre de clase, lo que nos devuelve una colección. Entonces, debemos obtener el primer elemento de la colección.
    let score = document.getElementsByClassName("contenedor-puntaje")[0];
    puntaje++;
    score.innerHTML = "Puntaje: " + puntaje;

    //Creamos un nuevo elemento <h1>
    let fin = document.createElement("h1")
    fin.id = "titulo";
    fin.innerHTML = "¡Ganaste! :)"

    //Sustituimos el elemento existente.
    let body = document.getElementsByTagName("body");
    let titulo = document.getElementById("titulo");
    body[0].replaceChild(fin, titulo);

    crearBoton();
}

/*
 * Función para cuando perdemos el juego.
 */
function perder(){
    //Creamos un nuevo elemento <h1>
    let fin = document.createElement("h1");
    fin.id = "titulo";
    fin.innerHTML = "Perdiste :("

    //Sustituimos el elemento existente.
    let body = document.getElementsByTagName("body");
    let titulo = document.getElementById("titulo");
    body[0].replaceChild(fin, titulo);

    //Obtenemos la colección de casillas.
    let casillas = document.getElementsByClassName("palabra");
    for(let i = 0; i < letras.length; i++){
        //Si la posición i en casillas está vacía buscamos su valor correspondiente el arreglo letras.
        if(casillas[i].innerHTML == ""){
            let casilla = casillas[i];
            let clase = casilla.className;
            casilla.className = clase + " faltante";
            //Mostramos la letra correcta en la casilla.
            let texto = document.createTextNode(letras[i]);
            casilla.appendChild(texto);
        }
    }

    crearBoton();
}

/*
 * Función que crea un botón para volver a jugar.
 */
function crearBoton(){
    let contenedor = document.getElementsByClassName("contenedor-letras")[0];
    //Eliminamos el mensaje
    let mensaje = contenedor.getElementsByTagName("h3")[0];
    contenedor.removeChild(mensaje);
    //Creamos un botón
    let boton = document.createElement("button");
    boton.innerHTML = "Volver a jugar";
    //Agregamos un event listener, que ejecutara la función reiniciar() cuando se presione el botón
    boton.addEventListener("click", reiniciar);
    //Obtenemos el elementos input
    let input = document.getElementById("entrada-letra");
    //Lo reemplazamos por el boton
    contenedor.replaceChild(boton, input);
}

/*
 * Función que reinicia el juego.
 */
function reiniciar(){
    letras = [];
    intentos = 1;
    letrasUsadas = [];
    letrasFaltantes = 0;

    //Eliminamos las casillas.
    let contenedorPalabra = document.getElementsByClassName("contenedor-palabra")[0];
    contenedorPalabra.innerHTML = "";

    //Volvemos a colocar la imagen inicial
    let imagenString = "img/1.png";
    document.getElementById("imagen").src = imagenString;

    //Reemplazamos el botón por el header y el input.
    let contenedorLetras = document.getElementsByClassName("contenedor-letras")[0];
    //Creamos el elemento h3
    let h3 = document.createElement("h3");
    h3.innerHTML = "Ingresa una letra";
    //Creamos el elemento input
    let input = document.createElement("input");
    input.id = "entrada-letra";
    //Limpiamos el contenedor
    contenedorLetras.innerHTML = "";
    //Agregamos los nuevos elementos.
    contenedorLetras.appendChild(h3);
    contenedorLetras.appendChild(input);

    //Reemplazamos el título del sitio.
    let mensaje = document.createElement("h1");
    mensaje.id = "titulo";
    mensaje.innerHTML = "Juego de Ahorcado";
    let body = document.getElementsByTagName("body")[0];
    let titulo = document.getElementById("titulo");
    body.replaceChild(mensaje, titulo);

    //Empezamos un nuevo juego.
    comenzarJuego();
}

comenzarJuego();
