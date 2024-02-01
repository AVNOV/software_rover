import { Map } from "./Topology/Map";
import { Orientation } from "./Topology/Orientation";
import { Position } from "./Topology/Position";
import { Rover } from "./Rover/Rover";
import { RoverInterpreter } from "./Rover/RoverInterpreter";
import WebSocket from "ws";

const randomWidth = Math.floor(Math.random() * (20 - 2 + 1)) + 2;
const randomHeight = Math.floor(Math.random() * (20 - 2 + 1)) + 2;
const map = new Map(randomWidth, randomHeight);
const roverPosition = new Position(0, 0);
let rover = new Rover(roverPosition, Orientation.North, map);
const randomObstacleX = Math.floor(Math.random() * (map.width - 1 - 1 + 1)) + 1;
const randomObstacleY = Math.floor(Math.random() * (map.height - 1 - 1 + 1)) + 1;
const obstaclePosition = new Position(randomObstacleX, randomObstacleY);

const wss = new WebSocket.Server({ port: 8080 });
let obstacleRevealed = false;

console.log("Server started on port 8080");

wss.on("connection", (ws: WebSocket) => {
  ws.send(JSON.stringify(map));
  ws.send(JSON.stringify({ position: rover.getPosition(), orientation: rover.getOrientation() }));
  if (obstacleRevealed) ws.send(JSON.stringify({ type: "obstacle", value: obstaclePosition }));

  ws.on("message", (message: Buffer) => {
    const oldRoverOrientation = rover.getOrientation();
    const oldRoverPosition: Position = rover.getPosition();
    rover = RoverInterpreter.interpret(message.toString(), rover, obstaclePosition);

    if (
      rover.equalsOrientation(oldRoverOrientation) &&
      rover.equalsPosition(oldRoverPosition)
    ) {
      obstacleRevealed = true;
      ws.send(JSON.stringify({ type: "obstacle", value: obstaclePosition }));
    }

    ws.send(JSON.stringify({ position: rover.getPosition(), orientation: rover.getOrientation() }));
  });
});
