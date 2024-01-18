const mySocket = new WebSocket("ws://localhost:8080/ws")

mySocket.onmessage = function (event) {
  const data = JSON.parse(event.data)
  if (['map', 'position', 'obstacle'].includes(data.type)) {
    switch (data.type) {
      case 'map':
        createMap(data.value.width, data.value.height)
        document.querySelector('#mapSize').innerHTML = `width: ${data.value.width} ; height: ${data.value.height}`
        break;
      case 'position':
        document.querySelectorAll('td').forEach(cell => {
          if (!cell.getAttribute('obstacle')) cell.style.backgroundColor = 'white'
        })
        document.querySelector(`#position-${data.value.x}-${data.value.y}`).style.backgroundColor = 'black'
        document.querySelector('#roverPosition').innerHTML = `X: ${data.value.x} ; Y: ${data.value.y}`
        break;
      case 'obstacle':
        const cell = document.querySelector(`#position-${data.value.x}-${data.value.y}`)
        cell.setAttribute('obstacle', true)
        cell.style.backgroundColor = 'red'
        break;
      default:
        break;
    }
  } else if (data.type === 'orientation') {
    document.querySelector('#roverOrientation').innerHTML = data.value
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

const createMap = (width, height) => {
  const container = document.querySelector('#app')

  for (let i = height - 1; i >= 0; i--) {
    const row = document.createElement('tr')
    for (let ii = 0; ii < width; ii++) {
      const cell = document.createElement('td')
      cell.style.border = '1px solid black'
      cell.style.padding = '20px'
      cell.setAttribute('id', `position-${ii}-${i}`)
      row.appendChild(cell)
    }
    container.appendChild(row)
  }
}
