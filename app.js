var mySocket = new WebSocket("ws://localhost:8080/ws");

// add event listener reacting when message is received
mySocket.onmessage = function (event) {
  console.log(event.data)
};