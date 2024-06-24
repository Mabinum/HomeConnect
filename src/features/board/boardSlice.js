import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodList: [],
  healthList: [],
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

    HealthContent: (state, action) => {
      console.log(action.payload.title);
      state.healthList.push({
        title: action.payload.title,
        content: action.payload.content
      });
    }
  }
});

export const {
  Food,
  HealthContent
} = boardSlice.actions;

export const selectBoardSlice = state => state.board.foodList;
export const selectHealthInfo = state => state.board.healthList;

export default boardSlice.reducer;