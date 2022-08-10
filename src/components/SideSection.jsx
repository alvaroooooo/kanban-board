import { useState, useRef } from 'react';
import BoardOption from './BoardOption'
import { BsBrightnessHigh, BsMoon } from 'react-icons/bs'
import iconBrandDark from './../assets/logo-light.svg';
import { useSelector } from 'react-redux';

function SideSection({setIsModalActive}) {
  const [optionBoard, setOptionBoard] = useState(null);
  const asideRef = useRef();

  const boardsInfo = useSelector(state => state.board)
  const boardsId = boardsInfo.map(board => board.id)
  const handleHideSidebar = () => {
    asideRef.current.classList.add("hide-sidebar")
    setTimeout(() => {
      asideRef.current.classList.add("hidden-sidebar")
    }, 200);
  }
    
  return (
    <aside className={"side-section"} ref={asideRef}>
      <section className="brand-section">
        <img src={iconBrandDark} className="brand" alt="Logo Dark"/>
      </section>

      <section className="board-list">
        <span className="board-list-title"> 
          ALL BOARDS ({boardsId.length})
        </span>
        {boardsId.map(boardId => (
          <div key={boardId}>
            <BoardOption
              setSelectedBoard={setOptionBoard}
              currentValue={optionBoard}
              boardId={boardId}
              key={boardId}/>
          </div>
        ))}
        <div className="board-selection">
          <div className="btn btn-new-board">
            <i className="icon icon--plus i-animation"></i>
            {' '} Create new Board
          </div>
        </div>
      </section>

      <section className="toggle-section">
        <div>
          <BsBrightnessHigh /> 
          <span className="sep">
            Toggle
          </span>
          <BsMoon />
        </div>
      </section>

      <section className="hide-sidebar-section">
        <div 
          onClick={handleHideSidebar}
          className="btn-hide">
          <i className="icon icon--close-sidebar"></i>
          <span className="sep">
            Hide Sidebar
          </span>
        </div>
      </section>
    </aside>
  )
}

export default SideSection