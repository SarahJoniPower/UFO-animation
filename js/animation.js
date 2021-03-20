
const canvas = document.getElementById("ufo-canvas")
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(200, 200, 60, 0, 2 * Math.PI)
ctx.fillStyle = 'rgb(255, 255, 255)'
ctx.fill();
