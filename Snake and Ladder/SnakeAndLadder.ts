class Game {
  gameBoard: Board;
  players: Player[];
  die: Die;
  gameStatus: GameStatus;

  public startGame(): void {}
  public movePlayer(player: Player): void {}
  public addPlayer(player: Player): void {}
}

class Board {
  specialEntities: SpecialEntities[];
  dimensions: number;

  public hasSpecialEntity(position: number): boolean {}
  public addSpecialEntity(position: number): void {}
  public getSpecialEntity(position: number): SpecialEntities {}
  public getTotalCells(): number {}
}

class SpecialEntities {
  startingPosition: number;
  endingPosition: number;
  public getStartingPosition(): number {}
  public getEndingPosition(): number {}
}

class Snake extends SpecialEntities {
  public getId(): string {
    return "snake";
  }
}
class Ladder extends SpecialEntities {
  public getId(): string {
    return "ladder";
  }
}

class Die {
  maxValue: number;
  minValue: number;
  public rollDie(): number {}
}

class Player {
  playerName: string;
  position: number;
}

enum GameStatus {
  RUNNING,
  COMPLETED,
  NOT_STARTED,
}
