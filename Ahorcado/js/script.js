let peliculas = ["Titanic", "Cenicienta", "Pulp Fiction", "Avatar", "Joker", "Toy Story", "Avengers", "Cars", "Batman Inicia", "Baby Driver", "Shrek", "Lalaland", "Monsters Inc", "El Padrino", "Sharknado", "Mulan", "Megamente", "Iron Man", "El transportador", "Enredados", "La Familia Adams", "Interestelar", "Venom", "Jumanji"];

let letras = [];
let intentos = 1;
let letrasUsadas = [];
let letrasFaltantes = 0;
let puntaje = 0;

function comenzarJuego(){
    const indice = Math.floor(Math.random() * peliculas.length);
    nuevaPalabra(peliculas[indice]);
}

function nuevaPalabra(cadena){
    console.log(cadena);
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
            casilla.setAttribute("class", "espacio");

        //En otro caso creamos el div con la clase "letra".
        else
            casilla.setAttribute("class", "letra");
        contenedor[0].appendChild(casilla);
    });
}

comenzarJuego();
