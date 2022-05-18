import { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board/Board.jsx";
import io from "socket.io-client";
const socket = io("ws://localhost:7070");

function App() {
  const [board, setBoard] = useState({});

  useEffect(() => {
    socket.on("message", (text) => {
      setBoard(text);
    });
  }, []);
  return (
    <div className="App">
      <Board socket={socket} />
    </div>
  );
}

export default App;
