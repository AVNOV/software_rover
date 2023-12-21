import { Rover } from "./Rover";
import { Position } from "./Position";

export class RoverInterpreter {
  private rover: Rover;

  constructor(rover: Rover) {
    this.rover = rover;
  }

  public interpret(command: string, obstacle: Position): void {
    switch (command) {
      case "avancer":
        this.rover.moveForward(obstacle);
        break;
      case "reculer":
        this.rover.moveBackward(obstacle);
        break;
      case "droite":
        this.rover.turnRight();
        this.rover.moveForward(obstacle);
        break;
      case "gauche":
        this.rover.turnLeft();
        this.rover.moveForward(obstacle);
        break;
    }
  }
}
