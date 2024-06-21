import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  IDPWInfo : {},
};

const mainSlice = createSlice({
  name : 'main',
  initialState,
  reducers : {
    getIDPWInfo : (state,{ payload : IDPW}) => {
      state.IDPWInfo = IDPW;
    },  
  }
});

export const {getIDPWInfo} = mainSlice.actions;

export const selectIDPWInfo = state => state.main.IDPWInfo;

<<<<<<< HEAD
export default mainSlice.reducer;

// 메뉴 라우터구성
// 데이터 받아오기
=======
export default mainSlice.reducer;
>>>>>>> 156f6cc93ff26c148055135ea4fdffc94cf88cac
