import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // IDPWInfo : {},
  name: {},
  birthdateAndSex : [],
  idpw : [],
  // PhoneNumber : {},
  address : [],
  myInfo : {name : "김석준" , userId : "userId1" , pw : "pw1"},
};

const mainSlice = createSlice({
  name : 'main',
  initialState,
  reducers : {
    // getIDPWInfo : (state,{ payload : IDPW}) => {
    //   state.IDPWInfo = IDPW;
    // },
    getNameInfo : (state, {payload : name}) => {
      state.name = name;
    },
    getBirthdateAndSex : (state, {payload : birthdateAndSex}) => {
      state.birthdateAndSex = birthdateAndSex;
    },
    getSignupIDPWInfo : (state,{payload : idpw}) => {
      state.idpw = idpw;
    },
    // getPhoneNumberInfo : (state,{payload : PhoneNumber}) => {
    //   state.PhoneNumber = PhoneNumber;
    // },
    getAddressInfo : (state,{payload : address}) => {
      state.address = address;
    },
    getmyInfo : (state,{payload : myInfo}) => {
      state.myInfo = myInfo;
    }
  } 
});

export const {getNameInfo,getBirthdateAndSex,getSignupIDPWInfo,getAddressInfo,getmyInfo} = mainSlice.actions;

// export const selectIDPWInfo = state => state.main.IDPWInfo;
export const selectName = state => state.main.name;
export const selectBirthdateAndSex = state => state.main.birthdateAndSex;
export const selectIDPW = state => state.main.idpw;
// export const selectPhoneNumber = state => state.main.PhoneNumber;
export const selectaddress = state => state.main.address;
export const selectSignup = state => state.main;
export const selectmyInfo = state => state.main.myInfo;

export default mainSlice.reducer;

// 메뉴 라우터구성
// 데이터 받아오기
