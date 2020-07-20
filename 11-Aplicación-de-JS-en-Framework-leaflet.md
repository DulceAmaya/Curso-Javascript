# Leaflet y Javascript  

Ya hemos abarcado los conocimientos mínimos necesarios del lenguaje Javascript para que podamos empezar con breves ejemplos de aplicación al **framework** **leaflet**, enseñaremos a realizar algunos ejemplos donde podemos visualizar información en un mapa.  

Lo primero que necesitamos es crear nuestra estructura de html básica como podemos ver a continuación:  

<p align="center"> 
<img src="./img/html-leaflet-01.png" width="600px;" height="300;">
</p>   

Debemos importar el framework de leaflet.js leaflet.css entre otros, para ello podemos encontrarlos en los siguientes links:  

* https://leafletjs.com/download.html  
  
  ```html
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script> 
  ```  
  
  Aquí podremos encontrar diferentes formas de bajar el archivo, ya sea en algún lugar donde esté hosteado ó directamente podemos guardar el archivo en nuestra computadora. 
  Para fines prácticos cargaremos la versión en la nube y enseñaremos una forma rápida (no recomendamos usar ésta forma para aplicaciones en el mundo real por cuestiones de         seguridad que no están en el alcance de éste curso) 
* https://developers.google.com/speed/libraries

  ```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

  ```  
  
Con el siguiente código css centraremos nuestro mapa que es lo que de momento nos interesa  
```html
<style type="text/css" media="screen">

		#map{
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
		}
	</style>
```


