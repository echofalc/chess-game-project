// function setPieces(position, url){
//     let piece = document.createElement("img")
//     piece.src = url
//     piece.style.opacity = "50%"
//     piece.style.zIndex = 3
//     let rmNum = document.getElementById(position).innerText = ""
//     let setPiece = document.getElementById(position).appendChild(piece)
//     return setPiece
// }


// let main = {
//     variables: {
//         turn: 'w',
//         selectedPiece: '',
//         pieces: {
//             w_king: {
//                 position: '',
//                 img: "./assets/images/wk.svg",
//                 captured: false,
//                 moved: false,
//                 type: "wk"
//             },
//             w_queen: {
//                 position: '',
//                 img: "./assets/images/wq.svg",
//                 captured: false,
//                 moved: false,
//                 type: "wq"
//               },
//               w_bishop1: {
//                 position: '',
//                 img: "./assets/images/wb.svg",
//                 captured: false,
//                 moved: false,
//                 type: "wb1"
//               },
//               w_bishop2: {
//                 position: '',
//                 img: "./assets/images/wb.svg",
//                 captured: false,
//                 moved: false,
//                 type: 'w_bishop'
//               },
//               w_knight1: {
//                 position: '',
//                 img: "./assets/images/wn.svg",
//                 captured: false,
//                 moved: false,
//                 type: "wn1"
//               },
//               w_knight2: {
//                 position: '',
//                 img: "./assets/images/wp.svg",
//                 captured: false,
//                 moved: false,
//                 type: "wk2"
//               },
//               w_rook1: {
//                 position: '',
//                 img: "./assets/images/wr.svg",
//                 captured: false,
//                 moved: false,
//                 type: "wr1"
//               },
//               w_rook2: {
//                 position: '',
//                 img: "./assets/images/wp.svg",
//                 captured: false,
//                 moved: false,
//                 type: "wr2"
//               },
//               w_pawn1: {
//                 position: '',
//                 img: "./assets/images/wp.svg",
//                 captured: false,
//                 type: "wp1",
//                 moved: false
//               },
//               w_pawn2: {
//                 position: '',
//                 img: "./assets/images/wp.svg",
//                 captured: false,
//                 type: "wp2",
//                 moved: false
//               },
//               w_pawn3: {
//                 position: '',
//                 img: "./assets/images/wp.svg",
//                 captured: false,
//                 type: "wp3",
//                 moved: false
//               },
//               w_pawn4: {
//                 position: '',
//                 img: "./assets/images/wp.svg",
//                 captured: false,
//                 type: "wp4",
//                 moved: false
//               },
//               w_pawn5: {
//                 position: '',
//                 img: "./assets/images/wp.svg",
//                 captured: false,
//                 type: "wp5",
//                 moved: false
//               },
//               w_pawn6: {
//                 position: '',
//                 img: "./assets/images/wp.svg",
//                 captured: false,
//                 type: "wp6",
//                 moved: false
//               },
//               w_pawn7: {
//                 position: '',
//                 img: "./assets/images/wp.svg",
//                 captured: false,
//                 type: "wp7",
//                 moved: false
//               },
//               w_pawn8: {
//                 position: '',
//                 img: "./assets/images/wp.svg",
//                 captured: false,
//                 type: "wp8",
//                 moved: false
//               },
        
//               b_king: {
//                 position: '',
//                 img: "./assets/images/bk.svg",
//                 captured: false,
//                 moved: false,
//                 type: "bk"
//               },
//               b_queen: {
//                 position: '',
//                 img: "./assets/images/bq.svg",
//                 captured: false,
//                 moved: false,
//                 type: "bq"
//               },
//               b_bishop1: {
//                 position: '',
//                 img: "./assets/images/bb.svg",
//                 captured: false,
//                 moved: false,
//                 type: "bb1"
//               },
//               b_bishop2: {
//                 position: '',
//                 img: "./assets/images/bb.svg",
//                 captured: false,
//                 moved: false,
//                 type: "bb2"
//               },
//               b_knight1: {
//                 position: '',
//                 img: "./assets/images/bn.svg",
//                 captured: false,
//                 moved: false,
//                 type: "bn1"
//               },
//               b_knight2: {
//                 position: '',
//                 img: "./assets/images/bn.svg",
//                 captured: false,
//                 moved: false,
//                 type: "bn2"
//               },
//               b_rook1: {
//                 position: '',
//                 img: "./assets/images/br.svg",
//                 captured: false,
//                 moved: false,
//                 type: "br1"
//               },
//               b_rook2: {
//                 position: '',
//                 img: "./assets/images/br.svg",
//                 captured: false,
//                 moved: false,
//                 type: "br2"
//               },
//               b_pawn1: {
//                 position: '',
//                 img: "./assets/images/bp.svg",
//                 captured: false,
//                 type: "bp",
//                 moved: false
//               },
//               b_pawn2: {
//                 position: '',
//                 img: "./assets/images/bp.svg",
//                 captured: false,
//                 type: "bp",
//                 moved: false
//               },
//               b_pawn3: {
//                 position: '',
//                 img: "./assets/images/bp.svg",
//                 captured: false,
//                 type: "bp",
//                 moved: false
//               },
//               b_pawn4: {
//                 position: '',
//                 img: "./assets/images/bp.svg",
//                 captured: false,
//                 type: "bp",
//                 moved: false
//               },
//               b_pawn5: {
//                 position: '',
//                 img: "./assets/images/bp.svg",
//                 captured: false,
//                 type: "bp",
//                 moved: false
//               },
//               b_pawn6: {
//                 position: '',
//                 img: "./assets/images/bp.svg",
//                 captured: false,
//                 type: "bp",
//                 moved: false
//               },
//               b_pawn7: {
//                 position: '',
//                 img: "./assets/images/bp.svg",
//                 captured: false,
//                 type: "bp",
//                 moved: false
//               },
//               b_pawn8: {
//                 position: '',
//                 img: "./assets/images/bp.svg",
//                 captured: false,
//                 type: "bp",
//                 moved: false
//               }
//             }
//           }
//          }

let test = {
    b_pawn8: {
        position: 'h8',
        captured: false,
        type: 'b_pawn',
        moved: false
    }
}


console.log(test.b_pawn8.captured)

