import React from 'react'

function BoardEmpty () {
  return (
    <section className="board-empty">
      <div className="empty-advice">
        This board is empty
        <br />
        Create a new Kanban Board to get start
      </div>
      <div className="btn btn-add-task">
        <i className="icon icon--plus-white"></i>
        {' '}
        Add a New Column
      </div>
    </section>
  )
}

export default BoardEmpty