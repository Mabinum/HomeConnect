import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodList: [],
  healthList: [],
  noticeList: [
    {
      title: '공지사항입니다.',
      content: '전기점검 날짜입니다.'
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
    HealthContent: (state, action) => {
      // console.log(action.payload.title);
      state.healthList.push({
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content
      });
    },
    NoticeContent: (state, action) => {

    },
    removeHealthList: (state, { payload: id }) => {
      const newList = state.healthList.filter(list => list.id !== id);
      state.healthList = newList;
    },
    removeFoodList: (state, { payload: id }) => {
      const newList = state.foodList.filter(list => list.id !== id);
      state.foodList = newList;
    },
  }
});

export const {
  Food,
  HealthContent,
  NoticeContent,
  removeHealthList,
  removeFoodList
} = boardSlice.actions;

export const selectBoardSlice = state => state.board.foodList;
export const selectHealthInfo = state => state.board.healthList;
export const selectNoticeInfo = state => state.board.noticeList;

export default boardSlice.reducer;