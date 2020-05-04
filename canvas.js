function forma1 () {

	var elemento1 = document.querySelector('#lienzo')

	var dibujo1 = elemento1.getContext('2d')

    
    dibujo1.beginPath()
    dibujo1.arc (200, 120, 80, 0, Math.PI*2, true)
    dibujo1.fillStyle = '#c9699c'
    dibujo1.strokeStyle = "black"
    dibujo1.fill()
    dibujo1.closePath()


    dibujo1.beginPath()
    dibujo1.lineWidth = 1.5
    dibujo1.arc (190, 115, 80, 0, Math.PI*2, true)
    dibujo1.stroke()
    dibujo1.closePath()
    

    dibujo1.beginPath()
    dibujo1.strokeStyle = "white"
    dibujo1.lineWidth = 3
    dibujo1.lineCap = "round"
    dibujo1.arc (210, 130, 80, 0, Math.PI/2, false)
    dibujo1.stroke()
    dibujo1.closePath()


    dibujo1.beginPath()
    dibujo1.lineWidth = 3
    dibujo1.lineCap = "round"
    dibujo1.arc (180, 100, 80, 0, Math.PI/2, false)
    dibujo1.fillStyle = '#506dad'
    dibujo1.fill()
    dibujo1.closePath()



}


 window.addEventListener ("load", forma1, false)


 function forma2 () {

 	var elemento2 = document.querySelector ('#lienzo2')
 	var dibujo2 = elemento2.getContext('2d')
 
    dibujo2.beginPath()
    dibujo2.arc(100, 10, 100, Math.PI*2, false)
    dibujo2.fill()
    dibujo2.closePath()


 }

window.addEventListener ("load", forma2, false)





  var mov, rect, pos_x=0

function animation () {

	rect.clearRect(0, 0, 520, 250)
	rect.beginPath()
	rect.arc(pos_x, 35, 10, 0, Math.PI*2, false)
	rect.strokeStyle = "white"
	rect.lineWidth = 3
	rect.stroke()
	rect.fillStyle = '##a5d6b9'
	rect.fill()
	pos_x ++
	if (pos_x==480) {
		pos_x=0
	}
	setTimeout(animation, 20)


    }

window.onload = function () {
    
    mov=document.querySelector ('#lienzo2')
    rect=mov.getContext('2d')
    animation()

}