export const makeMove = (e, symbol, position, myTurn, socket) => {
  if (!myTurn) {
    return;
  }

  if (e.target.text().length) {
    return;
  }

  socket.emit("make.move", {
    symbol: symbol,
    position: position,
  });
};
