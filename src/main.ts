import { Map } from "./Map";
import { Orientation } from "./Orientation";
import { Rover } from "./Rover";

const map = new Map(10, 10);
const rover = new Rover({ x: 0, y: 0}, Orientation.North, map);

console.log(rover.getPosition())

rover.turnRight()

console.log(rover.getPosition())

rover.moveBackward()

console.log(rover.getPosition())
