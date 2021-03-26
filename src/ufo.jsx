import React, { useRef, useEffect, useState } from "react"

class PureCanvas extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <canvas
        width="800"
        height="450"
        ref={node =>
          node ? this.props.contextRef(node.getContext('2d')) : null
        }
      />
    );
  }
}

export const UFO = ({xAxis, yAxis, landed, landing, starColour}) => {
  const canvasRef = useRef(null)

  // let [finalPosition, setFinalPosition] = useState({ x: xAxis, y: yAxis })
  
  // let array = [1, 2, 3] 
  // let a = array[0] 
  // let [a, b] = array

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, 800, 450);

      drawBackground(starColour)

      drawPlant(420, 400, 'purple', 'purple', 2, 1.5)
      drawPlant(600, 350, 'purple', 'yellow', 3, 1.5)
      drawPlant(680, 270, 'purple', 'purple', 2, 1.5)
      drawPlant(620, 250, 'purple', 'yellow', 2, 1.5)
      drawPlant(780, 170, 'green', 'red', 2, 1.5)
      drawPlant(720, 100, 'purple', 'yellow', 2, 1.5)

      drawUFO(xAxis, yAxis)

      drawPlant(500, 450, 'purple', 'green', 5, 2)
      drawPlant(400, 450, 'purple', 'blue', 4, 2)
      drawPlant(220, 450, 'purple', 'purple', 2, 1.5)
      drawPlant(180, 470, 'purple', 'purple', 2, 1.5)
      drawPlant(100, 470, 'green', 'red', 2, 1.5)

      drawPlant(750, 460, 'green', 'blue', 4, 2.5)
      drawPlant(801, 430, 'green', 'purple', 4, 2.5)
      drawPlant(700, 465, 'green', 'blue', 5, 2)

      drawPlant(801, 80, 'blue', 'yellow', 4, 2)


    function drawUFO(x, y) {
      drawTop(x, y)
      drawBottom(x, y)
      drawAntenna(x, y)

      if (landed === true) {
        drawAntennaCircle(x, y, 'pink')
        drawBodyCircles(x, y, 'white')
      } else {
        drawAntennaCircle(x, y, 'red')
        drawBodyCircles(x, y, 'purple')
      }

      if (landing === true) {
        drawLandingLights(x, y)
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
      ctx.lineTo(x - 50, y + 25)
      ctx.lineTo(x, y)
      ctx.lineTo(x + 80, y)
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'pink'
      ctx.stroke();
      ctx.fillStyle = 'orange'
      ctx.fill()
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
      let xAxisCircle = x - 35

      while (xAxisCircle <= x + 120) {
        drawBodyCircle(xAxisCircle, y + 21, 'orange', fillColour)
        xAxisCircle += 10
      }
    };

    function drawLandingLights(x, y) {
      ctx.beginPath();
      ctx.moveTo(x + 120, y + 25)
      ctx.lineTo(x + 135, y + 35);
      ctx.lineTo(x - 55, y + 35)
      ctx.lineTo(x - 40, y + 25)
      ctx.lineTo(x + 120, y + 25)
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(243, 243, 243, 0.288)';
      ctx.fillStyle = 'rgba(243, 243, 243, 0.388)';
      ctx.stroke();
      ctx.fill();
    };

    function drawBackground(colour) {
      drawSky(800, 450)
      drawBigDipper(250, 120)
      drawCancer(470, 20)

      drawThreeStars(400, 100, colour)
      drawThreeStars(300, 20, colour)
      drawThreeStars(100, 300, 'blue')
      drawThreeStars(50, 200, 'blue')
      drawThreeStars(600, 100, 'blue')
      drawThreeStars(500, 70, 'blue')
      drawThreeStars(10, 10, 'blue')
      drawThreeStars(50, 50, 'blue')
      drawThreeStars(450, 210, 'blue')
      drawPlanet(205, 55, 27, colour)
      drawPlanet(200, 230, 24, colour)
      drawPlanet(650, 30, 17, 'blue')
      drawGround(800, 450) 
    };

    function drawSky(x, y) {
      ctx.beginPath();
      ctx.rect(0, 0, x, y);
      ctx.fillStyle = 'rgb(5, 5, 110)';
      ctx.strokeStyle = 'rgb(5, 5, 110)';
      ctx.stroke();
      ctx.fill()
    };

    function drawGround(x, y) {
      ctx.beginPath()
      ctx.moveTo(800, 0)
      ctx.bezierCurveTo(600, 170, 650, 180, x - 150, y - 250)
      ctx.bezierCurveTo(600, 200, 650, 200, x - 400, y - 150)
      ctx.bezierCurveTo(400, 270, 450, 230, x - 650, y - 100)
      ctx.bezierCurveTo(100, 350, 150, 400, x - x, y)
      ctx.lineTo(x, y)
      ctx.lineTo(x, 0)
      ctx.strokeStyle = 'rgb(240, 101, 67)';
      ctx.fillStyle = 'rgb(240, 101, 67)';
      ctx.fill()
      ctx.stroke();
    };

    function drawPlant(x, y, lineColour, fillColour, leafRadius, stemWidth) {
      ctx.beginPath();
      ctx.moveTo(x, y)
      ctx.lineTo(x, y - 45)
      ctx.moveTo(x, y - 45)
      ctx.lineTo(x - 15, y - 37)
      ctx.moveTo(x - 15, y - 37)
      ctx.arc(x - 15, y - 37, leafRadius, 0, 2 * Math.PI)
      ctx.moveTo(x, y - 45)
      ctx.lineTo(x - 20, y - 50)
      ctx.moveTo(x - 20, y - 50)
      ctx.arc(x - 20, y - 50, leafRadius + 1, 0, 2 * Math.PI)
      ctx.moveTo(x, y - 45)
      ctx.lineTo(x - 10, y - 67)
      ctx.moveTo(x - 10, y - 67)
      ctx.arc(x - 10, y - 67, leafRadius, 0, 2 * Math.PI)
      ctx.moveTo(x, y - 45)
      ctx.lineTo(x + 15, y - 60)
      ctx.moveTo(x + 15, y - 60)
      ctx.arc(x + 15, y - 60, leafRadius + 1, 0, 2 * Math.PI)
      ctx.moveTo(x, y - 45)
      ctx.lineTo(x + 22, y - 30)
      ctx.moveTo(x + 22, y - 30)
      ctx.arc(x + 22, y - 30, leafRadius, 0, 2 * Math.PI)
      ctx.strokeStyle = lineColour
      ctx.fillStyle = fillColour
      ctx.lineWidth = stemWidth;
      ctx.stroke();
      ctx.fill()
    };

    function drawPlanet(x, y, radius, colour) {
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, 2 * Math.PI)
      ctx.moveTo(x - 40, y + 10)
      ctx.bezierCurveTo(x, y + 5, x, y + 5, x + 40, y - 10)
      ctx.moveTo(x - 40, y + 10)
      ctx.lineTo(x - radius, y - 1)
      ctx.moveTo(x + 40, y - 10)
      ctx.lineTo(x + radius, y - 10)
      ctx.strokeStyle = colour
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    function drawThreeStars(x, y, colour) {
      ctx.beginPath()
      ctx.arc(x, y, 1.5, 0, 2 * Math.PI)
      ctx.moveTo(x + 30, y + 20)
      ctx.arc(x + 30, y + 20, 1.5, 0, 2 * Math.PI)
      ctx.moveTo(x + 40, y - 20)
      ctx.arc(x + 40, y - 20, 1.5, 0, 2 * Math.PI)
      ctx.lineWidth = 1;
      ctx.strokeStyle = colour
      ctx.fillStyle = colour
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
      ctx.fillStyle = 'blue'
      ctx.fill()
      ctx.stroke();
    };
  });

  return <canvas
    width="800px"
    height="450px"
    ref={canvasRef}
    onClick={(event) => {
      const rectangle = event.target.getBoundingClientRect()
       setFinalPosition({ x: event.clientX - rectangle.left, y: event.clientY - rectangle.top }) 
      }}
  />
};
