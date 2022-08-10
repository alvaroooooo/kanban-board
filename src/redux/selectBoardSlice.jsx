import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentBoardId: null
}

const selectBoardSlice = createSlice({
  name: "selectedBoard",
  initialState,
  reducers: {
    selectBoard(state, action){
      state.currentBoardId = action.payload;
    }
  }
})

export default selectBoardSlice.reducer
export const { selectBoard } = selectBoardSlice.actions;