import { socket } from "../App";

export let symbol;

const isGameOver = (board) => {
  let matches = ["XXX", "OOO"];
  let rows = [
    board.r0c0 + board.r0c1 + board.r0c2, // 1st line
    board.r1c0 + board.r1c1 + board.r1c2, // 2nd line
    board.r2c0 + board.r2c1 + board.r2c2, // 3rd line
    board.r0c0 + board.r1c0 + board.r2c0, // 1st column
    board.r0c1 + board.r1c1 + board.r2c1, // 2nd column
    board.r0c2 + board.r1c2 + board.r2c2, // 3rd column
    board.r0c0 + board.r1c1 + board.r2c2, // Primary diagonal
    board.r0c2 + board.r1c1 + board.r2c0, // Secondary diagonal
  ];

  for (let i = 0; i < rows.length; i++) {
    if (rows[i] === matches[0] || rows[i] === matches[1]) {
      return true;
    }
  }

  return false;
};

const renderTurnMessage = (myTurn) => {
  if (!myTurn) {
    const turnObj = { message: "Your opponent's turn", disabled: true };
    return turnObj;
  } else {
    const turnObj = { message: "Your turn", disabled: false };
    return turnObj;
  }
};

export const moveMade = (
  myTurn,
  setMyTurn,
  setWinMessage,
  board,
  handleSetBoard
) => {
  socket.on("move.made", function (data) {
    handleSetBoard(data.position, data.symbol);

    let theDiv = document.getElementById(data.position);

    theDiv.textContent = data.symbol;

    if (data.symbol !== symbol) {
      setMyTurn(true);
    }

    if (data.symbol === symbol) {
      setMyTurn(false);
    }

    if (isGameOver(board)) {
      // Else show win/lose message
      if (myTurn) {
        setWinMessage("You lost.");
      } else {
        setWinMessage("You won!");
      }
    }
  });
};

export const gameBegin = (setMyTurn) => {
  socket.on("game.begin", function (data) {
    symbol = data.symbol;
    setMyTurn(symbol === "X");
  });
};

export const makeMove = (cellSelected, position, myTurn, board) => {
  if (!myTurn) {
    return;
  }

  if (cellSelected) {
    return;
  }

  socket.emit("make.move", {
    symbol: symbol,
    position: position,
  });
};
