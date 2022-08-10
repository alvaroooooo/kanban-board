import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  type: null,
  info: null,
  boardName: null,
  columnName: null
}

const selectModalSlice = createSlice({
  name: "setModal",
  initialState,
  reducers: {
    setModal: { 
      reducer(state, action){
        state.type = action.payload.type,
        state.info = action.payload.info, // To set the modal type
        state.boardName = action.payload.boardName,
        state.columnName = action.payload.columnName
      },
      prepare(info) {
        if (info === null) {
          return {
            payload: {
              type: null,
              info: null,
              boardName: null,
              columnName: null
            }
          }
        }
        return {
          payload: {
            ...info
          }
        }
      }
    }
  }
})

export default selectModalSlice.reducer
export const { setModal } = selectModalSlice.actions

