
const canvas = document.getElementById("ufo-canvas")
const ctx = canvas.getContext("2d");

const xBase = 400
const yBase = 225

ctx.beginPath();
ctx.arc(xBase, yBase, 65, 0, 2 * Math.PI)
ctx.fillStyle = 'blue'
ctx.fill();

ctx.beginPath();
ctx.moveTo(xBase - 200, yBase)
ctx.lineTo(xBase, yBase)
ctx.lineTo(xBase - 40, yBase - 30)
ctx.closePath()
ctx.fillStyle = 'blue'
ctx.fill();

ctx.beginPath();
ctx.moveTo(xBase + 200, yBase)
ctx.lineTo(xBase, yBase)
ctx.lineTo(xBase + 40, yBase - 30)
ctx.closePath()
ctx.fillStyle = 'blue'
ctx.fill();

ctx.beginPath();
ctx.moveTo(xBase - 200, yBase)
ctx.lineTo(xBase, yBase)
ctx.lineTo(xBase - 40, yBase + 20)
ctx.closePath()
ctx.fillStyle = 'blue'
ctx.fill();

ctx.beginPath();
ctx.moveTo(xBase + 200, yBase)
ctx.lineTo(xBase, yBase)
ctx.lineTo(xBase + 40, yBase + 20)
ctx.closePath()
ctx.fillStyle = 'blue'
ctx.fill();


// ctx.beginPath();
// ctx.arc(xBase + 100, yBase + 100, 40, 0, 2 * Math.PI)
// ctx.fillStyle = 'pink'
// ctx.fill();