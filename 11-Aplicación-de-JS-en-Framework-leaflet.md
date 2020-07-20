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

Debemos crear un bloque **div** donde inicializaremos nuestro mapa de leaflet, para ello agregamos el siguiente código:  

```html
<div id="map"></div>
```  
Ahora solo debemos ver la parte correspondiente a Javascript, pero antes como se mencionó antes para cargar los archivos desde la máquina local que actua como servidor usaremos un script de python.  

```python3
#!/usr/bin/env python3
# encoding: utf-8
"""Use instead of `python3 -m http.server` when you need CORS"""

from http.server import HTTPServer, SimpleHTTPRequestHandler

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        return super(CORSRequestHandler, self).end_headers()
httpd = HTTPServer(('localhost', 8080), CORSRequestHandler)
httpd.serve_forever()
```  
Usaremos una terminal para correr el servidor, el puerto será el 8080 y con localhost (127.0.0.1).  
 
<p align="center"> 
<img src="./img/python-server.png" width="600px;" height="200;">
</p>  

Para jalar nuestros archivos debemos tener la terminal parada en la misma carpeta que nuestros datos a cargar, además de manejar correctamente ya sea la ruta absoluta o relativa como se verá más adelante.  
Idealmente lo correcto es crear un archivo js con el código, pero para fines prácticos lo haremos dentro de un tag **script** de html 


```html
	<script type="text/javascript" charset="utf-8" >
	</script>  
```  

Vamos a inicializar e instanciar nuestro mapa de leaflet con la siguiente línea:  
```javascript
	<script type="text/javascript" charset="utf-8">
		var map = L.map('map').setView([19.4,-99.15],5);
	</script>  
```  

<p><span style="color:blue">Lo que aquí le estamos indicando es que utilize el div con el id 'map' que creamos en el html y centre el mapa en las latitud, longitud = 19.4, -99.15 correspondiente a la Ciudad de México, México.</span></p> 

Lo siguiente es cargar un tile layer base para nuestro mapa, en éste caso usaremos el que nos brinda **OpenStreetMaps**, un layer lo podemos pensara como un archivo ó herramienta que es un conjunto de datos geográficos (TERMINAR DE DEFINIR UN TILE LAYER).  

```javascript
	<script type="text/javascript" charset="utf-8">
		//código anterior  
		var baseLayer = L.tileLayer('https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png', {
			Zoom: 9,
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);
	</script>  
```  
A través del método tileLayer(...) podemos cargar y desplegar capas en nuestro mapa, entre los parámetros de la función está el **URL** al tile layer y las opciones de configuración entre las que usaremos Zoom para indicarle el nivel de zoom con el que queremos que se inicialize, un valor en 9 nos abarcará toda la república mexicana, se puede configurar dependiendo la necesidad de cada situación.  

Recordando un poco nuestro aprendizaje previo del lenguaje Javascript, recordemos que podemos aplicar funciones a resultados de funciones previas, entonces nuestra función **addTo(map)** que podemos encontrar al final de **tileLayer()**, con ésto le estamos indicando que se agregue el layer a nuestro mapa. Hasta éste punto deberemos tener nuestro mapa de la siguiente manera:  

 
<p align="center"> 
<img src="./img/leaflet01.png" width="900px;" height="700;">
</p>  
