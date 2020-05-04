var nombre2 = document.getElementById ('nombre2')

var date = document.getElementById ('date')

var time = document.getElementById ('time')

var email = document.getElementById ('email')


function validarDatos () { 

nombre2.addEventListener ("input", validarNombre2)
validarNombre2 ()

date.addEventListener ("input", validarDate)
validarDate ()

time.addEventListener ("input", validarTime)
validarTime ()

email.addEventListener ("input", validarEmail)
validarEmail ()
 }

function validarNombre2 () {
if (nombre2.value=='') {

nombre2.setCustomValidity ('Ingresá tu nombre')
nombre2.style.borderColor= '#ff9191' }

else {nombre2.setCustomValidity ('')
nombre2.style.borderColor= '#b0ffb5'  }
}

function validarDate () {
if (date.value=='') {

date.setCustomValidity ('Ingresá tu fecha de nacimiento')
date.style.borderColor= '#ff9191' }

else {date.setCustomValidity ('')
date.style.borderColor= '#b0ffb5'}
}

function validarTime () {
if (time.value=='') {

time.setCustomValidity ('Ingresá tu hora de nacimiento')
time.style.borderColor= '#ff9191' }

else {time.setCustomValidity ('')
time.style.borderColor= '#b0ffb5'  }
}

function validarEmail () {
if (email.value=='') {

email.setCustomValidity ('Ingresá tu email') 
email.style.borderColor= '#ff9191'  }

else {email.setCustomValidity ('')
email.style.borderColor= '#b0ffb5'  }
}


window.addEventListener("load", validarDatos)