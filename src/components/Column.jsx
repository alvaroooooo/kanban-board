import { useState } from 'react'
import Task from './Task';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { setModal } from './../redux/setModal';

function Column({boardName, content}) {
  const { columnName, tasks } = content;
  const dispatch = useDispatch()
  const handleAddTask = () => {
    dispatch(setModal({
      type: "task",
      info: null,
      boardName: boardName,
      columnName: columnName
    }))
  }
  return (
    <article className="column">
      <div className="column-name">
        {columnName + ' (' + tasks.length + ')'}
      </div>
      <div className="column-tasks">
        {
          tasks.map(task => 
            <Task content={task} key={nanoid()}/>
          )
        }
      </div>
      <div className="task-card-add"
        onClick={handleAddTask}>
        <i className="icon icon--plus" /> Add Task
      </div>
    </article>
  )
}

export default Column