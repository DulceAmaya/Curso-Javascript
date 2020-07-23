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

No es necesaria ésta función pero sirve para resaltar las líneas con su color correspondiente:  

```javascript
	// código previo
	function getColor(d) {
    		switch (d) {
    			case "Linea B":
    				return '#117f58'
    				
    			case "Linea 1":
    				return '#ff71a1'
    				
    			case "Linea 7":
    				return '#ff7825'
    				
    			case "Linea 3":
    				return '#c6ae0e'
    				
    			case "Linea 8":
    				return '#009f5d'
    				
    			case "Linea 2":
    				return '#0075bb'
    				
    			case "Linea A":
    				return '#972094'
    				
    			case "Linea 9":
    				return '#671a00'
    				
    			case "Linea 5":
    				return '#f6da14'
    				
    			case "Linea 4":
    				return '#39c7b9'
    				
    			case "Linea 12":
    				return '#bf9c4a'
    				
    			case "Linea 6":
    				return '#ff2122'
    				
    			default:
    				// statements_def
    				break;
    				
    		}
	}	
```
 
Usaremos una estructura switch case para cazar el color de la linea correspondiente  
