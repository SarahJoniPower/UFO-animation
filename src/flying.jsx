// FLYING
let yDistance = finalPosition.y - yAxis
let xDistance = finalPosition.x - xAxis

if (yAxis < finalPosition.y && landing === false) {
  yAxis += ySpeed(xDistance, yDistance)
} 

if (xAxis < finalPosition.x && landing === false) {
  xAxis += xSpeed(xDistance, yDistance)
} 

//  Landing
if (yAxis < finalPosition.y && landing === true) {
  yAxis += ySpeedLanding(xDistance, yDistance)
}

if (xAxis < finalPosition.x && landing === true) {
  xAxis += xSpeedLanding(xDistance, yDistance);
}

CheckIfLanding(xAxis, yAxis, finalPosition.x, finalPosition.y)
CheckIfLanded(xAxis, yAxis, finalPosition.x, finalPosition.y)

function ySpeed(xDistance, yDistance) {
  if (xDistance >= yDistance) {
    return ((yDistance) / ((xDistance) / speed))
  } else {
    return speed
  }
};

function xSpeed(xDistance, yDistance) {
  if (yDistance > xDistance) {
    return ((xDistance) / ((yDistance) / speed))
  } else {
    return speed
  }
};

function ySpeedLanding(xDistance, yDistance) {
  if (xDistance >= yDistance) {
    return ((yDistance) / ((xDistance) / 0.8))
  } else {
    return 0.8
  }
};

function xSpeedLanding(xDistance, yDistance) {
  if (yDistance > xDistance) {
    return ((xDistance) / ((yDistance) / 0.8))
  } else {
    return 0.8
  }
};

function CheckIfLanding(x, y, xFinal, yFinal) {
  if (x > xFinal * 0.9 && y > yFinal * 0.9 && landed === false ) {
    landing = true
  }
};

function CheckIfLanded(x, y, xFinal, yFinal) {
  if (x >= xFinal && y >= yFinal) {
  landed = true
  landing = false
  }
};
