import { Map } from "./Map";
import { Orientation } from "./Orientation";
import { Position } from "./Position";
import { Rover } from "./Rover";
import { RoverInterpreter } from "./RoverInterpreter";

const map = new Map(10, 10);
const roverPosition = new Position(0, 0);
const rover = new Rover(roverPosition, Orientation.North, map);
const obstaclePosition = new Position(0, 2);
const interpreter = new RoverInterpreter(rover);

interpreter.interpret('avancer', obstaclePosition);
interpreter.interpret('avancer', obstaclePosition);

