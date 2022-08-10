import { createSlice, nanoid } from "@reduxjs/toolkit"; 
import data from '../data/data.json';

const taskReducer = createSlice({
  name: 'boards',
  initialState: data,
  reducers: {
    addBoard: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(boardName) {
        return {
          payload: {
            boardName,
            columns: []
          }
        }
      }
    },
    addColumn: {
      reducer(state, action){
        const {nameBoard, column} = action.payload
        state.forEach((board) => {
          if (board === nameBoard) {
            board["columns"].push(column);
          }
        })
      },
      prepare(boardName, columnName){
        return {
          payload: {
            boardName,
            column: {
              columnName, 
              tasks: []
            }
          }
        }
      }
    },
    addTask(state, action) {
      const {boardName, columnName, ...taskData} = action.payload
      console.log(columnName, action.payload)
      state.forEach(board => {
        if (board.boardName === boardName){
          board.columns.forEach(column => {
            if (column.columnName === columnName) {
              console.log('Hola gente');
              console.log(column.columnName)
              column.tasks.push(taskData)
            }
          })
        }
      })
    }
  }
})


export default taskReducer.reducer;
export const {addBoard, addColumn, addTask} = taskReducer.actions;