const mySocket = new WebSocket("ws://localhost:8080/ws")

mySocket.onmessage = function (event) {
  const data = JSON.parse(event.data)
  if (data.width && data.height) {
    createMap(data.width, data.height)
    document.querySelector('#mapSize').innerHTML = `width: ${data.width} ; height: ${data.height}`

    return
  }

  if (data.type && data.type === 'obstacle') {
    const cell = document.querySelector(`#position-${data.value.x}-${data.value.y}`)
    cell.setAttribute('obstacle', true)
    cell.style.backgroundColor = 'red'

    return
  }

  document.querySelectorAll('td').forEach(cell => {
    if (!cell.getAttribute('obstacle')) cell.style.backgroundColor = 'white'
  })
  document.querySelector(`#position-${data.position.x}-${data.position.y}`).style.backgroundColor = 'black'
  document.querySelector('#roverPosition').innerHTML = `X: ${data.position.x} ; Y: ${data.position.y}`
}

mySocket.onopen = function () {
  const buttonMoveForward = document.querySelector('#moveForward')
  const buttonMoveBackward = document.querySelector('#moveBackward')
  const buttonTurnLeft = document.querySelector('#turnLeft')
  const buttonTurnRight = document.querySelector('#turnRight')

  sendMessage(buttonMoveForward, 'A')
  sendMessage(buttonMoveBackward, 'R')
  sendMessage(buttonTurnLeft, 'G')
  sendMessage(buttonTurnRight, 'D')
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
