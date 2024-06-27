import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boardList: [],
  healthList: [],
  noticeList: [
    {
      id : 1,
      title: '공지사항입니다.1',
      content: '전기점검 날짜입니다.1'
    },
    {
      id : 2,
      title: '공지사항입니다.2',
      content: '전기점검 날짜입니다.2'
    },
    {
      id : 3,
      title: '공지사항입니다.3',
      content: '전기점검 날짜입니다.3'
    },
  ]
}

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    Food: (state, action) => {
      console.log(action.payload);
      state.boardList = action.payload;
    },
    removeFoodList: (state, { payload: id }) => {
      state.boardList = newList;
      const newList = state.boardList.filter(list => list.id !== id);
    },
    // clearBoardList: (state) => {
    //   state.boardList = null; 
    // },

    HealthContent: (state, action) => {
      // console.log(action.payload.title);
      state.healthList.push({
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content
      });
    },
    NoticeContent: (state, action) => {
      state.noticeList.push({
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content,
        date: action.payload.date 
      });
    },
    removeHealthList: (state, { payload: id }) => {
      const newList = state.healthList.filter(list => list.id !== id);
      state.healthList = newList;
    },
  }
});

export const {
  Food,
  HealthContent,
  NoticeContent,
  removeHealthList,
  removeFoodList,
  clearBoardList,
} = boardSlice.actions;

export const selectBoardSlice = state => state.board.boardList;
export const selectHealthInfo = state => state.board.healthList;
export const selectNoticeInfo = state => state.board.noticeList;

export default boardSlice.reducer;