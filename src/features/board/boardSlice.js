import { createSlice } from "@reduxjs/toolkit";
import Health from "../health/Health";

const initialState = {
  foodList: [
    {
      id:'',
      title: '',
      content: '',
    }
  ],
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
    Food: (state, actions) => {

    },

    Health: (state, actions) => {

    }
  }
});

export const {} = boardSlice.actions;

export const selectBoardSlice = state => state.cart.cartList;

export default boardSlice.reducer;