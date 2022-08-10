import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './../../redux/taskSlice'
import { selectBoard } from './../../redux/selectBoardSlice'
import { setModal } from './../../redux/setModal'

function ModalAddTask() {
  const dispatch = useDispatch();
  const dataModal = useSelector(state => state.setModal)
  const dataBoards = useSelector(state => state.board)
  const {boardName, columnName} = dataModal;
  const titleRef = useRef();
  const descriptionRef = useRef();
  const handleAddTask = (e) => {
    e.preventDefault()
    const titleText = titleRef.current.value;
    const descriptionText = descriptionRef.current.value;
    dispatch(addTask({
      boardName,
      columnName,
      taskName: titleText,
      description: descriptionText,
      priority: "Medium"
    }))
    const dataCurrentBoard = dataBoards.find((b) => b.boardName === boardName)
    dispatch( selectBoard(dataCurrentBoard.id) )
    dispatch( setModal(null) )
  }

  return (
    <>
      <form className="form-task">
        <div className="form-title">
          Add Task Form
        </div>
        <div className="form-field">
          <label> Title </label>
          <input className="" type="text" ref={titleRef}/>
        </div>
        <div className="form-field">
          <label> Description </label>
          <input className="" type="textarea" ref={descriptionRef}/>
        </div>
        <div className="form-field form-last">
          <button onClick={handleAddTask}
            className="btn btn-add-task"> 
            <i className="icon icon--plus-white"></i> 
            {' '}
            Add New Task
          </button>
        </div>
      </form>
    </>
  )
}

export default ModalAddTask