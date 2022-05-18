import {useState} from 'react';
import "./cell.css";
import { makeMove,symbol } from '../../utils/gameLogic';
const Cell = ({myTurn,cellId}) => {

  const [cellSelected,setCellSelected] = useState(null)
  // const chooseCell = () => {
  //   socket.emit('message',cellId)
  // }

  return (
    <div
      onClick={(e) => {
        makeMove(cellSelected, cellId, myTurn)
        setCellSelected(symbol)}
      }
      className="cell">
       {cellSelected}
    </div>
  );
}

export default Cell;