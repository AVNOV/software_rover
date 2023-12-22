import { Rover } from "./Rover";
import { Position } from "./Position";

export class RoverInterpreter {
  static interpret(command: string, rover: Rover, obstacle: Position): void {
    switch (command) {
      case "avancer":
        rover.moveForward(obstacle);
        break;
      case "reculer":
        rover.moveBackward(obstacle);
        break;
      case "droite":
        rover.turnRight();
        rover.moveForward(obstacle);
        break;
      case "gauche":
        rover.turnLeft();
        rover.moveForward(obstacle);
        break;
    }
  }
}
