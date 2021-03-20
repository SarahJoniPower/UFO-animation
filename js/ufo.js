
const canvas = document.getElementById("ufo-canvas")
const ctx = canvas.getContext("2d");

// top of UFO 
ctx.beginPath();
ctx.moveTo(200, 200)
ctx.quadraticCurveTo(290, 55, 400, 200);
ctx.closePath();
ctx.lineWidth = 5;
ctx.strokeStyle = 'pink'
ctx.fillStyle = 'orange'
ctx.fill()
ctx.stroke();

// Bottom of UFO
ctx.beginPath();
ctx.moveTo(400, 200)
ctx.lineTo(500, 260);
ctx.moveTo(200, 200)
ctx.lineTo(90, 260);
ctx.moveTo(90, 260)
ctx.lineTo(500, 260);
ctx.closePath();
ctx.lineWidth = 5;
ctx.strokeStyle = 'pink'
ctx.stroke();

// Antenna
ctx.beginPath();
ctx.moveTo(200, 200)
ctx.lineTo(150, 150);
ctx.moveTo(400, 200)
ctx.lineTo(450, 150);
ctx.moveTo(450, 150)
ctx.arc(450, 150, 4, 0, 2 * Math.PI)
ctx.moveTo(150, 150)
ctx.arc(150, 150, 4, 0, 2 * Math.PI)
ctx.closePath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'orange'
ctx.fillStyle = 'orange'
ctx.fill()
ctx.stroke();

// blue Antenna 
ctx.beginPath();
ctx.arc(450, 150, 4, 0, 2 * Math.PI)
ctx.closePath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue'
ctx.fillStyle = 'blue'
ctx.fill()
ctx.stroke();

// Body circles 
function createBodyCircle(xAxis, yAxis, lineColour, fillColour) {
ctx.beginPath();
ctx.arc(xAxis, yAxis, 4, 0, 2 * Math.PI)
ctx.closePath();
ctx.lineWidth = 3;
ctx.strokeStyle = lineColour
ctx.fillStyle = fillColour
ctx.fill()
ctx.stroke();
}

xAxis = 120
colour = 'blue'

while (xAxis <= 465) {
  createBodyCircle( xAxis, 250, 'orange', colour)
  xAxis += 15

  if (colour === 'blue') {
    colour = 'orange'
  } 
  else {
    colour = 'blue'
  }
} 

createBodyCircle( 478, 250, 'orange', 'blue')
