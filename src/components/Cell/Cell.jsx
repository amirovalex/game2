import {useState} from 'react';
import "./cell.css";

const Cell = ({socket,cellId}) => {

  const [cellSelected,setCellSelected] = useState(null)
  const chooseCell = () => {
    socket.emit('message',cellId)
  }

  return (
    <div
      onClick={() => {
        console.log('clicked')
        chooseCell()}}
      className="cell">
       {cellSelected === 1 && "X"}
       {cellSelected === 2 && "O"}
    </div>
  );
}

export default Cell;