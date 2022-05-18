import Cell from '../Cell/Cell.jsx';
import './board.css';

const Board = ({socket}) => {
  return (
    <div className="board-container">
      <button>Reset</button>
      <div className="board">
        <h1>Players turn:</h1>
        <div className="board-row">
          <Cell cellId={1} socket={socket}/>
          <Cell cellId={2} socket={socket}/>
          <Cell cellId={3} socket={socket}/>
        </div>
        <div className="board-row">
          <Cell cellId={4} socket={socket}/>
          <Cell cellId={5} socket={socket}/>
          <Cell cellId={6} socket={socket}/>
        </div>
        <div className="board-row">
          <Cell cellId={7} socket={socket}/>
          <Cell cellId={8} socket={socket}/>
          <Cell cellId={9} socket={socket}/>
        </div>
      </div>
    </div>
  );
}

export default Board;