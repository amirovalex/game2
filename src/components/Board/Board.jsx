import Cell from '../Cell/Cell.jsx';
import './board.css';

const Board = () => {
  return (
    <div className="board-container">
      <button>Reset</button>
      <div className="board">
        <h1>Players turn:</h1>
        <div className="board-row">
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div className="board-row">
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div className="board-row">
          <Cell />
          <Cell />
          <Cell />
        </div>
      </div>
    </div>
  );
}

export default Board;