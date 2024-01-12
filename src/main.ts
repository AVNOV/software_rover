// import { Map } from "./Topology/Map";
// import { Orientation } from "./Topology/Orientation";
// import { Position } from "./Topology/Position";
// import { Rover } from "./Rover/Rover";
// import { RoverInterpreter } from "./Rover/RoverInterpreter";

// const map = new Map(10, 10);
// const roverPosition = new Position(0, 0);
// const rover = new Rover(roverPosition, Orientation.North, map);
// const obstaclePosition = new Position(0, 2);

// RoverInterpreter.interpret('avancer', rover, obstaclePosition);
// RoverInterpreter.interpret('avancer', rover, obstaclePosition);
import WebSocket from 'ws';

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws: WebSocket) => {
  console.log('New client connected');

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

