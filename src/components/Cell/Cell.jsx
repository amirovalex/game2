import {useState} from 'react';
import "./cell.css";
import { makeMove,symbol } from '../../utils/gameLogic';
const Cell = ({board,myTurn,cellId,handleSetBoard}) => {

  const [cellSelected,setCellSelected] = useState(null)

  return (
    <div
      id={cellId}
      onClick={(e) => {
        !board[cellId] && makeMove(cellSelected, cellId, myTurn)
        }
      }
      className="cell">
       {cellSelected}
    </div>
  );
}

export default Cell;