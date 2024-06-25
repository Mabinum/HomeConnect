import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  IDPWInfo : {},
  Name: {},
  BirthdateAndSex : [],
  IDPW : [],
  PhoneNumber : {},
  address : [],
};

const mainSlice = createSlice({
  name : 'main',
  initialState,
  reducers : {
    getIDPWInfo : (state,{ payload : IDPW}) => {
      state.IDPWInfo = IDPW;
    },
    getNameInfo : (state, {payload : Name}) => {
      state.Name = Name;
    },
    getBirthdateAndSex : (state, {payload : BirthdateAndSex}) => {
      state.BirthdateAndSex = BirthdateAndSex;
    },
    getSignupIDPWInfo : (state,{payload : IDPW}) => {
      state.IDPW = IDPW;
    },
    getPhoneNumberInfo : (state,{payload : PhoneNumber}) => {
      state.PhoneNumber = PhoneNumber;
    },
    getAddressInfo : (state,{payload : address}) => {
      state.address = address;
    },
  } 
});

export const {getIDPWInfo,getNameInfo,getBirthdateAndSex,getSignupIDPWInfo,getPhoneNumberInfo,getAddressInfo} = mainSlice.actions;

export const selectIDPWInfo = state => state.main.IDPWInfo;
export const selectName = state => state.main.Name;
export const selectBirthdateAndSex = state => state.main.BirthdateAndSex;
export const selectIDPW = state => state.main.IDPW;
export const selectPhoneNumber = state => state.main.PhoneNumber;
export const selectaddress = state => state.main.address;

export default mainSlice.reducer;

// 메뉴 라우터구성
// 데이터 받아오기
