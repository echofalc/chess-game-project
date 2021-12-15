## Brainstorming
- each side has 6 different types of pieces
    - pawn
        > can only move forward
        > can move only one space at a time *except* for each pawns first movement
        > captures one space diagonally left or right
    - rook
        > can move up, down, left, or right unlimited spaces *unless* the following space is occupied
        > captures the same
    - knight
        > moves on an "L" shape. 2 spaces up, down, left, right then one space
        > only piece that can jump other pieces
        > captures upon landing
    - bishop
        > moves diagonally in any direction for unlimited spaces *unless* the following space is occupied
        > captures diagonally
    - queen
        > free to move in any direction for unlimited spaced *unless* the follwing space is occupied
        > combination or rook and bishop
        > captures upon landing
    - king
        > move/capture one space in any direction
        > cannot be captured

## Action Items
- places imgs of each pieces in proper starting position
- create objects from each piece with their own particular movement pattern
- determine objects that need to be created
- determine functions 


## Notes
- 

## Pseudocode
// object for pieces
let test = {
    b_pawn8: {
        position: 'h8',
        captured: false,
        type: 'b_pawn',
        moved: false
    }
}

// function to set piece on board
