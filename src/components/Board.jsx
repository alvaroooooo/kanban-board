import { useSelector } from 'react-redux';
import BoardEmpty from './BoardEmpty';
import Column from './Column';

import iconVerticalEllipsis from './../assets/icon-vertical-ellipsis.svg'

function Board() {
  const boards = useSelector(state => state.board)
  const selectedBoardId = useSelector(state => state.selectedBoard.currentBoardId);
  const info = boards.find(board => board.id === selectedBoardId);
  console.log("boardID", selectedBoardId)
  console.log(info)

  return (
    <main className="right-section">
      <section className="top-banner">
        <div className="board-title">
          {info ? info.boardName : "Select a Board"}
        </div>
        <div className="banner-options">
          <div className="btn btn-add-task">
            <i className="icon icon--plus-white"></i>
            {' '}
            Add New Task
          </div>
          <div className="drop-menu">
            <img src={iconVerticalEllipsis} alt="menu" className="img-drop" />
          </div>
        </div>
      </section>
      {info ?
        <section className="board">
          <div className="board-inner">
            {
              info.columns.map(
                columnContent =>
                  <Column
                    boardName={info.boardName}
                    content={columnContent}
                    key={columnContent.columnName} />)
            }
          </div>
        </section> :
        <BoardEmpty />
      }
    </main>
  )
}

export default Board