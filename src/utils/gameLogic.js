import { socket } from "../App";

// let myTurn = true;
export let symbol;

const isGameOver = (board) => {
  let matches = ["XXX", "OOO"]; // This are the string we will be looking for to declare the match over

  // We are creating a string for each possible winning combination of the cells
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

  // Loop through all the rows looking for a match
  for (let i = 0; i < rows.length; i++) {
    if (rows[i] === matches[0] || rows[i] === matches[1]) {
      return true;
    }
  }

  return false;
};

const renderTurnMessage = (myTurn) => {
  if (!myTurn) {
    // If not player's turn disable the board
    const turnObj = { message: "Your opponent's turn", disabled: true };
    return turnObj;
    // $("#message").text("Your opponent's turn");
    // $(".board button").attr("disabled", true);
  } else {
    // Enable it otherwise
    const turnObj = { message: "Your turn", disabled: false };
    return turnObj;
    // $("#message").text("Your turn.");
    // $(".board button").removeAttr("disabled");
  }
};

// Bind event on players move
export const moveMade = (myTurn, setMyTurn, setWinMessage, board) => {
  socket.on("move.made", function (data) {
    console.log("Move made on client");
    console.log("data symbol", data.symbol);
    console.log("symbol", symbol);
    // $("#" + data.position).text(data.symbol);
    // Render move

    // If the symbol of the last move was the same as the current player
    // means that now is opponent's turn
    console.log("move made data symbol is true", data.symbol !== symbol);
    if (data.symbol !== symbol) {
      console.log("hey");
      setMyTurn(true);
    }

    if (data.symbol === symbol) {
      console.log("not hey");
      setMyTurn(false);
    }

    if (!isGameOver(board)) {
      // If game isn't over show who's turn is this
      const turnObject = renderTurnMessage();
      turnObject.message === "Your turn"
        ? setMyTurn(true)
        : turnObject.message === "Your opponent's turn" && setMyTurn(false);
    } else {
      // Else show win/lose message
      if (myTurn) {
        setWinMessage("You lost.");
      } else {
        setWinMessage("You won!");
      }

      //   $(".board button").attr("disabled", true); // Disable board
    }
  });
};

// Bind event for game begin
export const gameBegin = (setMyTurn) => {
  socket.on("game.begin", function (data) {
    symbol = data.symbol; // The server is assigning the symbol
    setMyTurn(symbol === "X"); // 'X' starts first
    // renderTurnMessage();
  });
};

export const makeMove = (cellSelected, position, myTurn) => {
  console.log("move made client");
  if (!myTurn) {
    return; // Shouldn't happen since the board is disabled
  }

  if (cellSelected) {
    return; // If cell is already checked
  }

  socket.emit("make.move", {
    // Valid move (on client side) -> emit to server
    symbol: symbol,
    position: position,
  });
};
