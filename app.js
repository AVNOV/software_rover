const mySocket = new WebSocket("ws://localhost:8080/ws")

// add event listener reacting when message is received
mySocket.onmessage = function (event) {
  const positionOrOrientation = JSON.parse(event.data)
  if (typeof positionOrOrientation === 'object') {
    document.querySelector('#roverPosition').innerHTML = `X: ${positionOrOrientation.x} ; Y: ${positionOrOrientation.y}`
  } else {
    document.querySelector('#roverOrientation').innerHTML = positionOrOrientation
  }
}

mySocket.onopen = function (event) {
  const buttonMoveForward = document.querySelector('#moveForward')
  const buttonMoveBackward = document.querySelector('#moveBackward')
  const buttonTurnLeft = document.querySelector('#turnLeft')
  const buttonTurnRight = document.querySelector('#turnRight')

  sendMessage(buttonMoveForward, 'avancer')
  sendMessage(buttonMoveBackward, 'reculer')
  sendMessage(buttonTurnLeft, 'gauche')
  sendMessage(buttonTurnRight, 'droite')
}

const sendMessage = (button, message) => {
  button.addEventListener('click', () => mySocket.send(message))
}
