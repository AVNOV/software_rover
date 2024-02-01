import { expect, test } from "vitest";

import { Rover } from "../../src/Rover/Rover";
import { Orientation } from "../../src/Topology/Orientation";
import { Map } from "../../src/Topology/Map";
import { Position } from "../../src/Topology/Position";
import { RoverInterpreter } from "../../src/Rover/RoverInterpreter";
import { describe } from "node:test";

// Tests
describe("move forward via interpreter", () => {
  test("when interpreter indicates rover move forward or backward, rover position should change correctly in each way", () => {
    const map = new Map(5, 5); // Par exemple, une carte de largeur 5 et hauteur 5

    const orientations = [
      Orientation.North,
      Orientation.South,
      Orientation.East,
      Orientation.West,
    ];

    orientations.forEach((orientation) => {
      const initialPosition = new Position(0, 0);
      const initialPosition1 = new Position(0, 0);

      const roverForward = new Rover(initialPosition, orientation, map);
      const roverBackward = new Rover(initialPosition1, orientation, map);

      const obstaclePosition = new Position(1, 1);

      // Effectuer un mouvement vers l'avant
      const roverPosition = RoverInterpreter.interpret(
        "avancer",
        roverForward,
        obstaclePosition
      );

      if (typeof roverPosition === "string") {
        expect(roverPosition).toEqual("Commande invalide");
      } else {
        // Vérifier que la position a été mise à jour correctement en tenant compte de la carte
        switch (orientation) {
          case Orientation.North:
            expect(roverPosition.position).toEqual({ x: 0, y: 1 });
            break;
          case Orientation.South:
            expect(roverPosition.position).toEqual({ x: 0, y: 4 }); // La carte reboucle à partir du haut vers le bas
            break;
          case Orientation.East:
            expect(roverPosition.position).toEqual({ x: 1, y: 0 });
            break;
          case Orientation.West:
            expect(roverPosition.position).toEqual({ x: 4, y: 0 }); // La carte reboucle à partir de la droite vers la gauche
            break;
          default:
            break;
        }
      }

      // Effectuer un mouvement vers l'arrière
      const roverPosition2 = RoverInterpreter.interpret(
        "reculer",
        roverBackward,
        obstaclePosition
      );

      if (typeof roverPosition2 === "string") {
        expect(roverPosition2).toEqual("Commande invalide");
      } else {
        // Vérifier que la position a été mise à jour correctement en tenant compte de la carte
        switch (orientation) {
          case Orientation.North:
            expect(roverPosition2.position).toEqual({ x: 0, y: 4 }); // La carte reboucle du bas vers le haut
            break;
          case Orientation.South:
            expect(roverPosition2.position).toEqual({ x: 0, y: 1 });
            break;
          case Orientation.East:
            expect(roverPosition2.position).toEqual({ x: 4, y: 0 }); // La carte reboucle de la gauche vers la droite
            break;
          case Orientation.West:
            expect(roverPosition2.position).toEqual({ x: 1, y: 0 });
            break;
          default:
            break;
        }
      }
    });
  });
});

describe("change orientation via interpreter", () => {
  test("when interpreter indicates rover turns left and right, rover orientation should change correctly in each orientation", () => {
    const map = new Map(5, 5); // Par exemple, une carte de largeur 5 et hauteur 5

    const orientations = [
      Orientation.North,
      Orientation.South,
      Orientation.East,
      Orientation.West,
    ];

    orientations.forEach((orientation) => {
      const initialPosition = new Position(0, 0);
      const initialPosition1 = new Position(0, 0);

      const roverLeft = new Rover(initialPosition, orientation, map);
      const roverRight = new Rover(initialPosition1, orientation, map);

      // Effectuer un virage à gauche
      const roverOrientation = RoverInterpreter.interpret(
        "gauche",
        roverLeft,
        new Position(0, 0)
      );

      if (typeof roverOrientation === "string") {
        expect(roverOrientation).toEqual("Commande invalide");
      } else {
        // Vérifier que l'orientation a été mise à jour correctement
        switch (orientation) {
          case Orientation.North:
            expect(roverOrientation.orientation).toEqual(Orientation.West); // Utiliser la méthode getOrientation
            break;
          case Orientation.South:
            expect(roverOrientation.orientation).toEqual(Orientation.East); // Utiliser la méthode getOrientation
            break;
          case Orientation.East:
            expect(roverOrientation.orientation).toEqual(Orientation.North); // Utiliser la méthode getOrientation
            break;
          case Orientation.West:
            expect(roverOrientation.orientation).toEqual(Orientation.South); // Utiliser la méthode getOrientation
            break;
          default:
            break;
        }
      }

      // Effectuer un virage à droite
      const roverOrientation2 = RoverInterpreter.interpret(
        "droite",
        roverRight,
        new Position(0, 0)
      );

      if (typeof roverOrientation2 === "string") {
        expect(roverOrientation2).toEqual("Commande invalide");
      } else {
        // Vérifier que l'orientation a été mise à jour correctement
        switch (orientation) {
          case Orientation.North:
            expect(roverOrientation2.orientation).toEqual(Orientation.East); // Utiliser la méthode getOrientation
            break;
          case Orientation.South:
            expect(roverOrientation2.orientation).toEqual(Orientation.West); // Utiliser la méthode getOrientation
            break;
          case Orientation.East:
            expect(roverOrientation2.orientation).toEqual(Orientation.South); // Utiliser la méthode getOrientation
            break;
          case Orientation.West:
            expect(roverOrientation2.orientation).toEqual(Orientation.North); // Utiliser la méthode getOrientation
            break;
          default:
            break;
        }
      }
    });
  });
});
