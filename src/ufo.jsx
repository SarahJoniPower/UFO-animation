import React, { useRef, useEffect, useState } from "react"

export const UFO = (props) => {
  const canvasRef = useRef(null)

  let [finalPosition, setFinalPosition] = useState({ x: props.xAxis, y: props.yAxis })

  // let array = [1, 2, 3] 
  // let a = array[0] 
  // let [a, b] = array

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d");

    let { xAxis, yAxis } = props

    let requestId;

    const render = () => {
      ctx.clearRect(0, 0, 800, 450);

      drawBackground()
      drawUFO(xAxis - 140, yAxis - 225)

      if (yAxis < finalPosition.y) {
        yAxis += ySpeed(xAxis, yAxis, finalPosition.x, finalPosition.y)
        // yAxis += ((finalPosition.y - yAxis) / ((finalPosition.x - xAxis) / 4)) ;
      }

      if (xAxis < finalPosition.x) {
        xAxis += xSpeed(xAxis, yAxis, finalPosition.x, finalPosition.y);
      }

      function ySpeed(x, y, xFinal, yFinal) {
        if (xFinal - x >= yFinal - y) {
          return ((yFinal - y) / ((xFinal - x) / 4))
        } else {
          return 4
        }
      };

      function xSpeed(x, y, xFinal, yFinal) {
        if (yFinal - y > xFinal - x) {
          return ((xFinal - x) / ((yFinal - y) / 4))
        } else {
          return 4
        }
      };

      requestId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(requestId)
    }

    function drawUFO(x, y) {
      drawTop(x, y)
      drawBottom(x, y)
      drawAntenna(x, y)

      if (yAxis >= finalPosition.y && xAxis >= finalPosition.x) {
        drawAntennaCircle(x, y, 'pink')
        drawBodyCircles(x, y, 'white')
      } else {
        drawAntennaCircle(x, y, 'red')
        drawBodyCircles(x, y, 'purple')
      }
    };

    function drawTop(x, y) {
      ctx.beginPath();
      ctx.moveTo(x, y)
      ctx.quadraticCurveTo(x + 40, y - 60, x + 80, y);
      ctx.closePath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'pink'
      ctx.fillStyle = 'orange'
      ctx.fill()
      ctx.stroke();
    };

    function drawBottom(x, y) {
      ctx.beginPath();
      ctx.moveTo(x + 80, y)
      ctx.lineTo(x + 130, y + 25);
      ctx.moveTo(x, y)
      ctx.lineTo(x - 50, y + 25);
      ctx.moveTo(x - 50, y + 25)
      ctx.lineTo(x + 130, y + 25);
      ctx.closePath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'pink'
      ctx.stroke();
    };

    function drawAntenna(x, y) {
      ctx.beginPath();
      ctx.moveTo(x, y)
      ctx.lineTo(x - 35, y - 15);
      ctx.moveTo(x + 80, y)
      ctx.lineTo(x + 115, y - 15);
      ctx.moveTo(x + 115, y - 15)
      ctx.arc(x + 115, y - 15, 2, 0, 2 * Math.PI)
      ctx.moveTo(x - 35, y - 15)
      ctx.arc(x - 35, y - 15, 2, 0, 2 * Math.PI)
      ctx.closePath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'orange'
      ctx.fillStyle = 'orange'
      ctx.fill()
      ctx.stroke();
    };

    function drawAntennaCircle(x, y, colour) {
      ctx.beginPath();
      ctx.arc(x + 115, y - 15, 2.7, 0, 2 * Math.PI)
      ctx.moveTo(x - 35, y - 15)
      ctx.arc(x - 35, y - 15, 2.7, 0, 2 * Math.PI)
      ctx.closePath();
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = colour
      ctx.fillStyle = colour
      ctx.fill()
      ctx.stroke();
    };

    function drawBodyCircle(x, y, lineColour, fillColour) {
      ctx.beginPath();
      ctx.arc(x, y, 2.7, 0, 2 * Math.PI)
      ctx.closePath();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = lineColour
      ctx.fillStyle = fillColour
      ctx.fill()
      ctx.stroke();
    }

    function drawBodyCircles(x, y, fillColour) {
      let xAxisCircle = xAxis - 170

      while (xAxisCircle <= xAxis - 30) {
        drawBodyCircle(xAxisCircle, yAxis - 205.5, 'orange', fillColour)
        xAxisCircle += 10
      }
    };

    function drawBackground() {
      drawSky()
      drawBigDipper(250, 100)
      drawCancer(470, 20)
      drawThreeStars(400, 100)
      drawThreeStars(300, 20)
      drawThreeStars(100, 300)
      drawThreeStars(50, 200)
      drawThreeStars(600, 100)
      drawThreeStars(500, 70)
      drawThreeStars(10, 10)
      drawThreeStars(50, 50)
      drawThreeStars(450, 210)
      drawPlanet(205, 55, 27)
      drawPlanet(200, 200, 24)
      drawPlanet(650, 30, 17)
      drawGround()
    };

    function drawSky() {
      ctx.beginPath();
      ctx.rect(0, 0, 800, 400);
      ctx.fillStyle = 'rgb(10, 19, 150)';
      ctx.strokeStyle = 'rgb(10, 19, 150)';
      ctx.stroke();
      ctx.fill()
    };

    function drawGround() {
      ctx.beginPath()
      ctx.moveTo(800, 0)
      ctx.bezierCurveTo(600, 80, 650, 80, 650, 150)
      ctx.bezierCurveTo(600, 200, 650, 200, 400, 250)
      ctx.bezierCurveTo(400, 270, 450, 230, 150, 300)
      ctx.bezierCurveTo(100, 300, 150, 300, 0, 400)
      ctx.lineTo(800, 400)
      ctx.lineTo(800, 0)
      ctx.strokeStyle = 'rgb(240, 101, 67)';
      ctx.fillStyle = 'rgb(240, 101, 67)';
      ctx.fill()
      ctx.stroke();
    };

    function drawPlanet(x, y, radius) {
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, 2 * Math.PI)
      ctx.moveTo(x - 40, y + 10)
      ctx.bezierCurveTo(x, y + 5, x, y + 5, x + 40, y - 10)
      ctx.moveTo(x - 40, y + 10)
      ctx.lineTo(x - radius, y - 1)
      ctx.moveTo(x + 40, y - 10)
      ctx.lineTo(x + radius, y - 10)
      ctx.strokeStyle = 'blue'
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    function drawThreeStars(x, y) {
      ctx.beginPath()
      ctx.arc(x, y, 1.5, 0, 2 * Math.PI)
      ctx.moveTo(x + 30, y + 20)
      ctx.arc(x + 30, y + 20, 1.5, 0, 2 * Math.PI)
      ctx.moveTo(x + 40, y - 20)
      ctx.arc(x + 40, y - 20, 1.5, 0, 2 * Math.PI)
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'blue'
      ctx.fillStyle = 'blue'
      ctx.fill()
      ctx.stroke();
    };

    function drawCancer(x, y) {
      ctx.beginPath()
      ctx.arc(x, y, 1.5, 0, 2 * Math.PI)
      ctx.lineTo(x + 30, y + 30)
      ctx.arc(x + 30, y + 30, 1.5, 0, 2 * Math.PI)
      ctx.moveTo(x + 30, y + 30)
      ctx.lineTo(x + 40, y + 50)
      ctx.arc(x + 40, y + 50, 1.5, 0, 2 * Math.PI)
      ctx.moveTo(x + 40, y + 50)
      ctx.lineTo(x + 40, y + 70)
      ctx.arc(x + 40, y + 70, 1.5, 0, 2 * Math.PI)
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'blue'
      ctx.strokeStyle = 'blue'
      ctx.fillStyle = 'blue'
      ctx.fill()
      ctx.stroke();
    };

    function drawBigDipper(x, y) {
      ctx.beginPath()
      ctx.arc(x, y, 1.5, 0, 2 * Math.PI)
      ctx.lineTo(x + 40, y - 10)
      ctx.arc(x + 40, y - 10, 1.5, 0, 2 * Math.PI)
      ctx.moveTo(x + 40, y - 10)
      ctx.lineTo(x + 60, y)
      ctx.arc(x + 60, y, 1.5, 0, 2 * Math.PI)
      ctx.moveTo(x + 60, y)
      ctx.lineTo(x + 70, y + 10)
      ctx.arc(x + 70, y + 10, 1.5, 0, 2 * Math.PI)
      ctx.moveTo(x + 70, y + 10)
      ctx.lineTo(x + 120, y - 10)
      ctx.arc(x + 120, y - 10, 1.5, 0, 2 * Math.PI)
      ctx.moveTo(x + 120, y - 10)
      ctx.lineTo(x + 118, y + 30)
      ctx.arc(x + 118, y + 30, 1.5, 0, 2 * Math.PI)
      ctx.moveTo(x + 118, y + 30)
      ctx.lineTo(x + 70, y + 37)
      ctx.arc(x + 70, y + 37, 1.5, 0, 2 * Math.PI)
      ctx.moveTo(x + 70, y + 37)
      ctx.lineTo(x + 70, y + 10)
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'blue'
      ctx.strokeStyle = 'blue'
      ctx.fillStyle = 'blue'
      ctx.fill()
      ctx.stroke();
    };
  });

  return <canvas
    width="800px"
    height="450px"
    ref={canvasRef}
    onClick={(event) => { setFinalPosition({ x: event.clientX, y: event.clientY }) }}
  />
}
