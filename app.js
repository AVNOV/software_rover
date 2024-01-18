const mySocket = new WebSocket("ws://localhost:8080/ws")

mySocket.onmessage = function (event) {
  const data = JSON.parse(event.data)
  if (typeof data === 'object') {
    if (Object.getOwnPropertyNames(data).includes('width')) {
      document.querySelector('#mapSize').innerHTML = `width: ${data.width} ; height: ${data.height}`
    }
    if (Object.getOwnPropertyNames(data).includes('x')) {
      document.querySelector('#roverPosition').innerHTML = `X: ${data.x} ; Y: ${data.y}`
    }
  } else {
    document.querySelector('#roverOrientation').innerHTML = data
  }
}

mySocket.onopen = function () {
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
