import { expect, test } from "vitest";

import { Rover } from "../../src/Rover/Rover";
import { CardinalPoint, Orientation } from "../../src/Topology/Orientation";
import { Map } from "../../src/Topology/Map";
import { Position } from "../../src/Topology/Position";
import { RoverInterpreter } from "../../src/Rover/RoverInterpreter";
import { describe } from "node:test";

// Tests
describe("move forward via interpreter", () => {
  test("when interpreter indicates rover move forward or backward, rover position should change correctly in each way", () => {
    const map = new Map(5, 5); // Par exemple, une carte de largeur 5 et hauteur 5

    const cardinalPoints = [
      CardinalPoint.North,
      CardinalPoint.South,
      CardinalPoint.East,
      CardinalPoint.West,
    ];

    cardinalPoints.forEach((cardinalPoint) => {
      const initialPosition = new Position(0, 0);
      const initialPosition1 = new Position(0, 0);
      const orientation = new Orientation(cardinalPoint);

      const roverForward = new Rover(initialPosition, orientation, map);
      const roverBackward = new Rover(initialPosition1, orientation, map);

      const obstaclePosition = new Position(1, 1);

      // Effectuer un mouvement vers l'avant
      const roverPosition = RoverInterpreter.interpret(
        "A",
        roverForward,
        obstaclePosition
      );

      if (typeof roverPosition === "string") {
        expect(roverPosition).toEqual("Commande invalide");
      } else {
        // Vérifier que la position a été mise à jour correctement en tenant compte de la carte
        switch (orientation.getCardinalPoint()) {
          case CardinalPoint.North:
            expect(roverPosition.getPosition()).toEqual({ x: 0, y: 1 });
            break;
          case CardinalPoint.South:
            expect(roverPosition.getPosition()).toEqual({ x: 0, y: 4 }); // La carte reboucle à partir du haut vers le bas
            break;
          case CardinalPoint.East:
            expect(roverPosition.getPosition()).toEqual({ x: 1, y: 0 });
            break;
          case CardinalPoint.West:
            expect(roverPosition.getPosition()).toEqual({ x: 4, y: 0 }); // La carte reboucle à partir de la droite vers la gauche
            break;
          default:
            break;
        }
      }

      // Effectuer un mouvement vers l'arrière
      const roverPosition2 = RoverInterpreter.interpret(
        "R",
        roverBackward,
        obstaclePosition
      );

      if (typeof roverPosition2 === "string") {
        expect(roverPosition2).toEqual("Commande invalide");
      } else {
        // Vérifier que la position a été mise à jour correctement en tenant compte de la carte
        switch (orientation.getCardinalPoint()) {
          case CardinalPoint.North:
            expect(roverPosition2.getPosition()).toEqual({ x: 0, y: 4 }); // La carte reboucle du bas vers le haut
            break;
          case CardinalPoint.South:
            expect(roverPosition2.getPosition()).toEqual({ x: 0, y: 1 });
            break;
          case CardinalPoint.East:
            expect(roverPosition2.getPosition()).toEqual({ x: 4, y: 0 }); // La carte reboucle de la gauche vers la droite
            break;
          case CardinalPoint.West:
            expect(roverPosition2.getPosition()).toEqual({ x: 1, y: 0 });
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

    const cardinalPoints = [
      CardinalPoint.North,
      CardinalPoint.South,
      CardinalPoint.East,
      CardinalPoint.West,
    ];

    cardinalPoints.forEach((cardinalPoint) => {
      const initialPosition = new Position(0, 0);
      const initialPosition1 = new Position(0, 0);
      const orientation = new Orientation(cardinalPoint);

      const roverLeft = new Rover(initialPosition, orientation, map);
      const roverRight = new Rover(initialPosition1, orientation, map);

      // Effectuer un virage à gauche
      const roverOrientation = RoverInterpreter.interpret(
        "G",
        roverLeft,
        new Position(0, 0)
      );

      if (typeof roverOrientation === "string") {
        expect(roverOrientation).toEqual("Commande invalide");
      } else {
        // Vérifier que l'orientation a été mise à jour correctement
        switch (orientation.getCardinalPoint()) {
          case CardinalPoint.North:
            expect(
              roverOrientation.getOrientation().getCardinalPoint()
            ).toEqual(CardinalPoint.West);
            break;
          case CardinalPoint.South:
            expect(
              roverOrientation.getOrientation().getCardinalPoint()
            ).toEqual(CardinalPoint.East);
            break;
          case CardinalPoint.East:
            expect(
              roverOrientation.getOrientation().getCardinalPoint()
            ).toEqual(CardinalPoint.North);
            break;
          case CardinalPoint.West:
            expect(
              roverOrientation.getOrientation().getCardinalPoint()
            ).toEqual(CardinalPoint.South);
            break;
          default:
            break;
        }
      }

      // Effectuer un virage à droite
      const roverOrientation2 = RoverInterpreter.interpret(
        "D",
        roverRight,
        new Position(0, 0)
      );

      if (typeof roverOrientation2 === "string") {
        expect(roverOrientation2).toEqual("Commande invalide");
      } else {
        // Vérifier que l'orientation a été mise à jour correctement
        switch (orientation.getCardinalPoint()) {
          case CardinalPoint.North:
            expect(
              roverOrientation2.getOrientation().getCardinalPoint()
            ).toEqual(CardinalPoint.East);
            break;
          case CardinalPoint.South:
            expect(
              roverOrientation2.getOrientation().getCardinalPoint()
            ).toEqual(CardinalPoint.West);
            break;
          case CardinalPoint.East:
            expect(
              roverOrientation2.getOrientation().getCardinalPoint()
            ).toEqual(CardinalPoint.South);
            break;
          case CardinalPoint.West:
            expect(
              roverOrientation2.getOrientation().getCardinalPoint()
            ).toEqual(CardinalPoint.North);
            break;
          default:
            break;
        }
      }
    });
  });
});
