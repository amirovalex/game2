import { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board/Board.jsx";
import io from "socket.io-client";
import { gameBegin, moveMade, symbol } from "./utils/gameLogic";
export const socket = io("ws://localhost:7070");

function App() {
  const [board, setBoard] = useState({});
  const [myTurn, setMyTurn] = useState(true);
  const [winMessage, setWinMessage] = useState("");

  useEffect(() => {
    gameBegin(setMyTurn);
    moveMade(myTurn, setMyTurn, setWinMessage, board);
    // socket.on("message", (text) => {
    //   setBoard(text);
    // });
    // socket.on("make.move", (newBoard) => {
    //   setBoard(newBoard);
    // });
  }, []);

  useEffect(() => {
    console.log("my turn changed", myTurn);
    console.log("my turn symbol", symbol);
  }, [myTurn]);

  return (
    <div className="App">
      <Board myTurn={myTurn} />
    </div>
  );
}

export default App;
