import { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board/Board.jsx";
import io from "socket.io-client";
import { gameBegin, moveMade, symbol } from "./utils/gameLogic";
export const socket = io(process.env.REACT_APP_BACKEND_URL);

function App() {
  const [board, setBoard] = useState({});
  const [myTurn, setMyTurn] = useState(true);
  const [winMessage, setWinMessage] = useState("");

  const handleSetBoard = (position, symbol) => {
    setBoard({ ...board, [position]: symbol });
  };
  const handleSetTurn = (bool) => {
    setMyTurn(bool);
  };
  useEffect(() => {
    gameBegin(setMyTurn);
  }, []);

  useEffect(() => {
    moveMade(myTurn, handleSetTurn, setWinMessage, board, handleSetBoard);
  }, [board]);

  return (
    <div className="App">
      <Board board={board} handleSetBoard={handleSetBoard} myTurn={myTurn} />
      <h1
        style={{
          display:
            winMessage === "You won!" || winMessage === "You lost."
              ? "flex"
              : "none",
        }}
        id="winMessage"
      >
        {winMessage}
      </h1>
    </div>
  );
}

export default App;
