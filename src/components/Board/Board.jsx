import Cell from '../Cell/Cell.jsx';
import './board.css';

const Board = ({board,handleSetBoard,myTurn}) => {
  const rowsId = [["r0c0","r0c1","r0c2"],["r1c0","r1c1","r1c2"],["r2c0","r2c1","r2c2"]]
  
  const renderRows = () => {
    return rowsId.map((row,index) => {
      return <div key={index} className="board-row">
        {row.map((id,indexId) => {
          return <Cell key={indexId} board={board} cellId={id} handleSetBoard={handleSetBoard} myTurn={myTurn}/>
        })}
      </div>
    })
  }

  return (
    <div className="board-container">
      <button>Reset</button>
      <div className="board">
        <h1>{myTurn === null ? "Wait for another player to join" : myTurn ? "Your turn" : "Your opponent's turn"}</h1>
        {renderRows()}
      </div>
    </div>
  );
}

export default Board;