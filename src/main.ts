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
const rover = new Rover(roverPosition, Orientation.North, map);
const randomObstacleX = Math.floor(Math.random() * (map.width - 1 - 1 + 1)) + 1;
const randomObstacleY =
  Math.floor(Math.random() * (map.height - 1 - 1 + 1)) + 1;
const obstaclePosition = new Position(randomObstacleX, randomObstacleY);

const wss = new WebSocket.Server({ port: 8080 });
let obstacleRevealed = true;

console.log("Server started on port 8080");

wss.on("connection", (ws: WebSocket) => {
  ws.send(JSON.stringify({ type: "map", value: map }));
  ws.send(JSON.stringify({ type: "position", value: roverPosition }));
  ws.send(JSON.stringify({ type: "orientation", value: rover.getOrientation() }));
  if (obstacleRevealed)
    ws.send(JSON.stringify({ type: "obstacle", value: obstaclePosition }));

  ws.on("message", (message: Buffer) => {
    const value = RoverInterpreter.interpret(
      message.toString(),
      rover,
      obstaclePosition
    );

    let type = "";
    if (typeof value === "object") type = "position";
    if (typeof value === "string") type = "orientation";
    ws.send(JSON.stringify({ type, value }));
  });
});
