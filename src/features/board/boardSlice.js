import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodList: [],
  healthList: [
    {
      id:'',
      title: '',
      content: '',
    }
  ]
}

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    Food: (state, action) => {
      state.foodList.push({
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content,
        date: action.payload.date
      });
    },

    Health: (state, actions) => {
      
    }
  }
});

export const {
  Food
} = boardSlice.actions;

export const selectBoardSlice = state => state.board.foodList;

export default boardSlice.reducer;