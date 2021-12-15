
class Piece {
    constructor(color, pieceName) {
        this.color = color;
        this.pieceName = pieceName;
    }
    setStartPosition() {
        
    }
}

class Pawn extends Piece{
    constructor(color, space, selector) {
        super(color, "pawn");
        this.selector = doc
        let pawn = document.createElement("img")
        if (color === "white") {
          pawn.src = "./assets/images/wp.svg"
        } else if (color === "black") {
          pawn.src = "./assets/images/bp.svg" 
        }
        document.getElementById(space).appendChild(pawn);
    }
    pawnMovement() {

    }
    pawnCapture() {

    }
}

class Rook extends Piece{
  constructor(color) {
      super(color, "rook")
  }
  rookMovement() {

  }
  rookCapture() {

  }
}

class Knight extends Piece{
  constructor(color) {
      super(color, "knight")
  }
  knightMovement() {

  }
  knightCapture() {

  }
}

class Bishop extends Piece{
  constructor(color) {
      super(color, "bishop")
  }
  bishopMovement() {

  }
  bishopCapture() {

  }
}

class Queen extends Piece{
  constructor(color) {
      super(color, "queen")
  }
  queenMovement() {

  }
  queenCapture() {

  }
}

class King extends Piece{
  constructor(color) {
      super(color, "pawn")
  }
  kingMovement() {

  }
  kingCapture() {

  }
  check() {

  }
  checkMate() {

  }
  castling() {
    
  }
}

class Board {
  constructor() {
    this.rows = [
      // Row 0: a,b,c,d,e,f,g,h
      [],
      // Row 1: a,b,c,d,e,f,g,h
      [new Pawn("black")],
      // Row 2: a,b,c,d,e,f,g,h
      [null, null, null, null, null, null, null, null],
      // Row 3: a,b,c,d,e,f,g,h
      [null, null, null, null, null, null, null, null],
      // Row 4: a,b,c,d,e,f,g,h
      [null, null, null, null, null, null, null, null],
      // Row 5: a,b,c,d,e,f,g,h
      [null, null, null, null, null, null, null, null],
      // Row 6: a,b,c,d,e,f,g,h
      [new Pawn("white"),],
      // Row 7: a,b,c,d,e,f,g,h
      []
    ]
  }
}

new Pawn("white", "b2")
new Pawn("white", "c2")

new Pawn("black", "b7")
new Pawn("black", "c7")

// Test movement

