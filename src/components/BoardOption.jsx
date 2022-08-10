import { useDispatch, useSelector } from 'react-redux';
import { selectBoard } from './../redux/selectBoardSlice'

function BoardOption({setSelectedBoard, currentValue, boardId}) {
  const isActive = boardId === currentValue;
  const dispatch = useDispatch();
  const boards = useSelector(state => state.board)
  const boardInfo = boards.find(board => board.id === boardId)
  const {boardName} = boardInfo
  const style = isActive ? "btn-selected" : ""

  const handleClick = () => {
    if (isActive) {
      setSelectedBoard(false)
    } else {
      setSelectedBoard(boardId)
      dispatch( selectBoard( boardId ) )
    }
  }

  return (
    <div className="board-selection">
      <div className={"btn btn-select-board " + style} 
        onClick={handleClick}>
        {boardName}
      </div>
    </div>
  )
}

export default BoardOption