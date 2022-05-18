import Cell from '../Cell/Cell.jsx';
import './board.css';

const Board = ({board,handleSetBoard,myTurn}) => {
  return (
    <div className="board-container">
      <button>Reset</button>
      <div className="board">
        <h1>{myTurn ? "Your turn" : "Your opponent's turn"}</h1>
        <div className="board-row">
          <Cell board={board} cellId={"r0c0"} handleSetBoard={handleSetBoard} myTurn={myTurn}/>
          <Cell board={board} cellId={"r0c1"} handleSetBoard={handleSetBoard}myTurn={myTurn}/>
          <Cell board={board} cellId={"r0c2"} handleSetBoard={handleSetBoard}myTurn={myTurn}/>
        </div>
        <div className="board-row">
          <Cell cellId={"r1c0"} handleSetBoard={handleSetBoard}myTurn={myTurn}/>
          <Cell cellId={"r1c1"} handleSetBoard={handleSetBoard}myTurn={myTurn}/>
          <Cell cellId={"r1c2"} handleSetBoard={handleSetBoard}myTurn={myTurn}/>
        </div>
        <div className="board-row">
          <Cell cellId={"r2c0"} handleSetBoard={handleSetBoard}myTurn={myTurn}/>
          <Cell cellId={"r2c1"} handleSetBoard={handleSetBoard}myTurn={myTurn}/>
          <Cell cellId={"r2c2"} handleSetBoard={handleSetBoard}myTurn={myTurn}/>
        </div>
      </div>
    </div>
  );
}

export default Board;