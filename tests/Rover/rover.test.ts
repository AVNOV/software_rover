import { beforeAll, describe, expect, test } from "vitest";
import { Rover } from "../../src/Rover/Rover";
import { CardinalPoint, Orientation } from "../../src/Topology/Orientation";
import { Position } from "../../src/Topology/Position";
import { Map } from "../../src/Topology/Map";

describe("Rover class", () => {
  const orientations = [
    CardinalPoint.North,
    CardinalPoint.West,
    CardinalPoint.South,
    CardinalPoint.East,
  ];
  const map = new Map(5, 5);

  describe("moveForward function", () => {
    const orientation = new Orientation(CardinalPoint.North);
    test("when rover move forward, his position should change and he should return his position (0, 1)", () => {
      const rover = new Rover(new Position(0, 0), orientation, map);
      const roverPosition = rover.moveForward(new Position(1, 1)).getPosition();
      const expectedResult = new Position(0, 1);
      expect(roverPosition).toEqual(expectedResult);
    });
    test("when rover move forward to edge of the map, rover should goes at the other end of the map and he should return his position (0, 0)", () => {
      const rover = new Rover(new Position(0, 4), orientation, map);
      const roverPosition = rover.moveForward(new Position(1, 1)).getPosition();
      const expectedResult = new Position(0, 0);
      expect(roverPosition).toEqual(expectedResult);
    });
    test("when rover move forward and an obstacle is in front of him, his position should not change and he should return his position (0, 0)", () => {
      const rover = new Rover(new Position(0, 0), orientation, map);
      const roverPosition = rover.moveForward(new Position(0, 1)).getPosition();
      const expectedResult = new Position(0, 0);
      expect(roverPosition).toEqual(expectedResult);
    });
  });

  describe("moveBackward function", () => {
    const orientation = new Orientation(CardinalPoint.North);
    test("when rover move backward, his position should change and he should return his position (0, 0)", () => {
      const rover = new Rover(new Position(0, 1), orientation, map);
      const roverPosition = rover
        .moveBackward(new Position(1, 1))
        .getPosition();
      const expectedResult = new Position(0, 0);
      expect(roverPosition).toEqual(expectedResult);
    });
    test("when rover move backward to edge of the map, rover should goes at the other end of the map and he should return his position (0, 4)", () => {
      const rover = new Rover(new Position(0, 0), orientation, map);
      const roverPosition = rover
        .moveBackward(new Position(1, 1))
        .getPosition();
      const expectedResult = new Position(0, 4);
      expect(roverPosition).toEqual(expectedResult);
    });
    test("when rover move backward and an obstacle is behind him, his position should not change and he should return his position (0, 1)", () => {
      const rover = new Rover(new Position(0, 1), orientation, map);
      const roverPosition = rover
        .moveBackward(new Position(0, 0))
        .getPosition();
      const expectedResult = new Position(0, 1);
      expect(roverPosition).toEqual(expectedResult);
    });
  });

  describe("turnLeft function", () => {
    const orientation = new Orientation(CardinalPoint.East);
    let rover = new Rover(new Position(0, 0), orientation, map);

    for (let index = 0; index < orientations.length; index++) {
      test(`when the rover turn left, he should return the new orientation of the rover (${orientations[index]})`, () => {
        rover = rover.turnLeft(new Position(0, 1));
        const expectedResult = orientations[index];
        expect(rover.getOrientation().getCardinalPoint()).toEqual(
          expectedResult
        );
      });
    }
  });

  describe("turnRight", () => {
    const orientation = new Orientation(CardinalPoint.North);
    let rover = new Rover(new Position(0, 0), orientation, map);

    for (let index = orientations.length - 1; index >= 0; index--) {
      test(`when the rover turn right, he should return the new orientation of the rover (${orientations[index]})`, () => {
        rover = rover.turnRight(new Position(1, 1));
        const expectedResult = orientations[index];
        expect(rover.getOrientation().getCardinalPoint()).toEqual(
          expectedResult
        );
      });
    }
  });
});
