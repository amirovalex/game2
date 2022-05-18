export const makeMove = (e, symbol, position, myTurn, socket) => {
  if (!myTurn) {
    return; // Shouldn't happen since the board is disabled
  }

  if (e.target.text().length) {
    return; // If cell is already checked
  }

  socket.emit("make.move", {
    // Valid move (on client side) -> emit to server
    symbol: symbol,
    position: position,
  });
};
