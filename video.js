

var video = document.querySelector ('#segundo')
var boton = document.querySelector ('#reproducirr')

function reproducir () {
	if(video.paused) {
		video.play()
		boton.innerHTML = '<span class="icon-controller-paus"></span>'
	} 
	else {video.pause()
	boton.innerHTML = '<span class="icon-controller-play"></span>'

	}
}

function frenar () {
	video.currentTime =0
	video.pause()
}

function saltar (valor) {
	video.currentTime += valor
}