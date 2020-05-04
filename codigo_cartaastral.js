
var nombre1 = document.getElementById ('nombre1')

function validarDatos () { 
	nombre1.addEventListener ("input", validarNombre1)
	validarNombre1 ();

	date.addEventListener ("input", validarDate)
	validarDate ();

	time.addEventListener ("input", validarTime)
	validarTime ();

	email.addEventListener ("input", validarEmail)
	validarEmail ();
}


function validarNombre1 () {
	if (nombre1.value=='') {

		nombre1.setCustomValidity ('Ingresá tu nombre')
	} else {nombre1.setCustomValidity ('')}
}



var date = document.getElementById ('date')

function validarDate () {
	if (date.value=='') {

		date.setCustomValidity ('Ingresá tu fecha de nacimiento')
	} else {date.CustomValidity ('')}
}

var time = document.getElementById ('time')

function validarTime {
	if (time.value==) {

		time.setCustomValidity ('Ingresá tu hora de nacimiento')
	} else {time.CustomValidity ('')}
}

var email = document.getElementById ('email')

function validarEmail () {
	if (email.value=='') {

		email.setCustomValidity ('Ingresá tu email')
	} else {email.CustomValidity ('')}
}

window.addEventListener ("load", validarDatos)