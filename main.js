const Board = require("./models/Board");

const board = new Board();

board.knightMoves([0, 0], [1, 2]);
board.knightMoves([0, 0], [3, 3]);
board.knightMoves([0, 7], [1, 4]);
board.knightMoves([0, 0], [7, 7]);
