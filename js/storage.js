function base () {

	var boton = document.querySelector ('#enviar')
	boton.addEventListener('click', items, false)
	mostraritems()
}

function items() {

	var clave = document.querySelector('#nombre2').value 

	var fecha = document.querySelector('#date').value

	var hora = document.querySelector('#time').value

	var mail = document.querySelector('#email').value


	var valores = [fecha, hora, mail]


     localStorage.setItem (clave, valores)
     mostraritems()
}

function mostraritems () {

	var caja = document.querySelector('#muestradatos')

	/*caja.innerHTML = '<a href="#" onclick="eliminardatos()">Borrar Datos</a>'*/

	for(var a=0; a<localStorage.length; i++) {

		var id = localStorage.key(a)
		var valor = localStorage.getItem(id)

	caja.innerHTML += '<p>' +id+ ' - ' +valor+ '</p>'

	}
}


function eliminardatos () {

	localStorage.clear ()
	location.reload()
	mostraritems()

}

window.addEventListener('load', base, false)