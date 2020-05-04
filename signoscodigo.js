var signosGrupo = []

signosGrupo [0]=["https://lohnert.000webhostapp.com/javascript/signosdeaire.png", "https://lohnert.000webhostapp.com/javascript/airepng222.png"]
signosGrupo [1]=["https://lohnert.000webhostapp.com/javascript/signosdefuego.png", "https://lohnert.000webhostapp.com/javascript/fuegopng222.png"]
signosGrupo [2]=["https://lohnert.000webhostapp.com/javascript/signosdetierra.png", "https://lohnert.000webhostapp.com/javascript/tierrapng222.png"]
signosGrupo [3]=["https://lohnert.000webhostapp.com/javascript/signosdeagua.png", "https://lohnert.000webhostapp.com/javascript/aguapng222.png"]

var vinculos = document.getElementById ('links')

var imagenes = document.getElementById ('signosimages')

vinculos.href = signosGrupo [0] [0]
imagenes.src = signosGrupo [0] [1]

var indice = 0
var limite = signosGrupo.length-1

function carrusel () {
	indice++
	if(indice>limite) {indice=0}

		vinculos.href=signosGrupo[indice] [0]
	    imagenes.src=signosGrupo[indice][1]
}

setInterval (carrusel, 5000)

