import { useSelector, useDispatch } from 'react-redux';
import { setModal } from './../../redux/setModal'
import ModalAddTask from './ModalAddTask';
import './../../style/modal-box.css';

function selectBetweenModal(type) {
  let modal = null
  switch (type) {
    case "task": 
      modal = <ModalAddTask />
      break
    default: 
      modal = null;
      break
  }
  return modal
}

function ModalBox() {

  const modalInfo = useSelector(state => state.setModal);
  const dispatch = useDispatch()

  const hiddenStyle = Boolean(modalInfo["type"]) ? "" : " is-hidden";
  const modalSelected = selectBetweenModal(modalInfo["type"])
  
  const handleClose = () => {
    dispatch( setModal(null) )
  }

  return (
    <section className={"modal-box-container" + hiddenStyle}>
      <div className="btn-close"
        onClick={handleClose}>
        <i className="icon icon--close"></i>
      </div>
      {modalSelected}
    </section>
  )
}

export default ModalBox