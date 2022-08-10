import { configureStore } from "@reduxjs/toolkit";

import boardReducer from './taskSlice';
import selectBoardReducer from './selectBoardSlice';
import setModalReducer from './setModal'

export default configureStore({
  reducer: {
    board: boardReducer,
    selectedBoard: selectBoardReducer,
    setModal: setModalReducer
  },
}) 