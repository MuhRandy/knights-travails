const { log } = require("console");
const Board = require("./models/Board");

const board = new Board();

log(board.knightMoves([0, 0], [1, 2]));
log(board.knightMoves([0, 0], [3, 3]));
log(board.knightMoves([0, 7], [1, 4]));
log(board.knightMoves([0, 0], [7, 7]));
