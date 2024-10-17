module.exports = class Board {
  board = this.#generateBoard(8, 8);

  knightMoves(startArr, goalArr) {
    const start = this.#arrayToNumber(startArr);
    const goal = this.#arrayToNumber(goalArr);

    let queue = new Queue([start]);
    let visited = new Set();

    visited.add(start);

    while (queue.data.length > 0) {
      let path = queue.dequeue();
      let node = path.at(-1);

      if (node === goal) {
        console.log(
          `You made it in ${path.length - 1} moves!  Here's your path: `
        );
        path.forEach((p) => console.log(this.#numberToArray(p)));

        return this.#numbersToArrays(path);
      }

      for (const neighbor of this.board[node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.enqueue([...path, neighbor]);
        }
      }
    }

    return null;
  }

  #generateRow(cellNumber) {
    const row = [];

    for (let i = 0; i < cellNumber; i++) {
      row.push(i);
    }

    return row;
  }

  #generateBoard(rowNumber, colNumber) {
    const board = {};
    const array = [];

    for (let i = 0; i < colNumber; i++) {
      array.push(...this.#generateRow(rowNumber).map((num) => num + 10 * i));
    }

    array.forEach((num) => {
      board[num] = this.#arraysToNumbers(
        this.#getPossibleMove(this.#numberToArray(num))
      );
    });

    return board;
  }

  #numberToArray(num) {
    if (num < 10) return [0, num];
    return String(num)
      .split("")
      .map((v) => parseInt(v));
  }

  #numbersToArrays(nums) {
    return nums.map((num) => this.#numberToArray(num));
  }

  #arrayToNumber(arr) {
    return parseInt(arr.join(""));
  }

  #arraysToNumbers(arrs) {
    return arrs.map((arr) => this.#arrayToNumber(arr));
  }

  #getPossibleMove(currMove) {
    const [a, b] = currMove;
    const possibleMove = [];

    if (a < 6 && b < 7) possibleMove.push([a + 2, b + 1]);
    if (a < 6 && b > 0) possibleMove.push([a + 2, b - 1]);
    if (a > 1 && b < 7) possibleMove.push([a - 2, b + 1]);
    if (a > 1 && b > 0) possibleMove.push([a - 2, b - 1]);
    if (a < 7 && b < 6) possibleMove.push([a + 1, b + 2]);
    if (a < 7 && b > 1) possibleMove.push([a + 1, b - 2]);
    if (a > 0 && b < 6) possibleMove.push([a - 1, b + 2]);
    if (a > 0 && b > 1) possibleMove.push([a - 1, b - 2]);
    return possibleMove;
  }
};

class Queue {
  constructor(value) {
    this.data = [value];
  }

  enqueue(value) {
    this.data.push(value);
  }

  dequeue() {
    return this.data.shift();
  }
}
