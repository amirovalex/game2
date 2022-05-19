import { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board/Board.jsx";
import io from "socket.io-client";
import { gameBegin, moveMade, symbol } from "./utils/gameLogic";
export const socket = io(process.env.REACT_APP_BACKEND_URL);

function App() {
  const [board, setBoard] = useState({});
  const [myTurn, setMyTurn] = useState(null);
  const [winMessage, setWinMessage] = useState("");

  // const resetGame = () => {
  //   setBoard({});
  //   setMyTurn(null);
  //   setWinMessage("");
  // };

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
      <div
        className="win-message-container"
        style={{
          display:
            winMessage === "You won!" || winMessage === "You lost."
              ? "flex"
              : "none",
        }}
      >
        {/* <button onClick={() => resetGame()}>Reset</button> */}
        <h1 id="winMessage">{winMessage}</h1>
      </div>
    </div>
  );
}

export default App;
