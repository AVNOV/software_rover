// Objet-valeur
export enum CardinalPoint {
  North = 0,
  East = 1,
  South = 2,
  West = 3,
}

// Objet-valeur
export class Orientation {
  private cardinalPoint: CardinalPoint;

  public constructor(cardinalPoint: CardinalPoint) {
    this.cardinalPoint = cardinalPoint;
  }

  public incrementOrientation(): Orientation {
    let newCardinalPoint = this.cardinalPoint + 1;
    if (this.cardinalPoint === CardinalPoint.West) {
      newCardinalPoint = CardinalPoint.North;
    }
    return new Orientation(newCardinalPoint);
  }

  public decrementOrientation(): Orientation {
    let newCardinalPoint = this.cardinalPoint - 1;
    if (this.cardinalPoint === CardinalPoint.North) {
      newCardinalPoint = CardinalPoint.West;
    }
    return new Orientation(newCardinalPoint);
  }

  public equals(orientation: Orientation): boolean {
    return this.cardinalPoint === orientation.cardinalPoint;
  }

  public getCardinalPoint() {
    return this.cardinalPoint;
  }
}
