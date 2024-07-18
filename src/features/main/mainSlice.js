import { createSlice } from "@reduxjs/toolkit";
import { lightTheme } from "../../components/MyPage";

const initialState = {
  myInfo : {},
  theme: {lightTheme},
};

const mainSlice = createSlice({
  name : 'main',
  initialState,
  reducers : {
    getmyInfo : (state,{payload : user}) => {
      state.myInfo = user;
    },
    getTheme : (state,{payload : theme}) => {
      state.theme = theme;
    }
  } 
});

export const {getmyInfo,getTheme} = mainSlice.actions;
export const selectmyInfo = state => state.main.myInfo;
export const selectTheme = state => state.main.theme;

export default mainSlice.reducer;

