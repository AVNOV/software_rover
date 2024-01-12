import { Map } from "./Topology/Map";
import { Orientation } from "./Topology/Orientation";
import { Position } from "./Topology/Position";
import { Rover } from "./Rover/Rover";
import { RoverInterpreter } from "./Rover/RoverInterpreter";

const map = new Map(10, 10);
const roverPosition = new Position(0, 0);
const rover = new Rover(roverPosition, Orientation.North, map);
const obstaclePosition = new Position(0, 2);

RoverInterpreter.interpret('avancer', rover, obstaclePosition);
RoverInterpreter.interpret('avancer', rover, obstaclePosition);

