# Leaflet y Javascript segundo ejemplo  

Aquí cargaremos las geometrías de las líneas del metro de la CDMX, y marcadores con movimiento.  

Primero que nada creamos un template de html básico:  

<p align="center"> 
<img src="./img/ejemplo-02-leaflet-html.png" width="600px;" height="300;">
</p>   

Cargamos las bibliotecas necesarias como se ha visto previamente:  


```html
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" />
	<script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"></script>
    	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="../js/leaflet.ajax.min.js"></script>
``` 

**Debemos descargar el archivo js de moving marker** lo podemos encontrar tanto en el repositorio o en la siguiente liga:  

**https://github.com/ewoken/Leaflet.MovingMarker**

```html
	<script type="text/javascript" src="../js/MovingMarker.js"></script>
``` 

Recordemos que para jalar archivos locales debemos tener montado el mini-server con python o importar uno hosteado desde algún link.



En el **head** agregamos el siguiente css 

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

Creamos el tag script para nuestro código JS  

```html
<script type="text/javascript" charset="utf-8" ></script>		

```

Inicializamos, instanciamos y centramos el mapa en las coordenadas, así como el base layer correspondiente de **OSM**

```javascript
<script type="text/javascript" charset="utf-8" >
	var map = L.map('map').setView([19.40,-99.12],12);
			var baseLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);



</script>		

```
