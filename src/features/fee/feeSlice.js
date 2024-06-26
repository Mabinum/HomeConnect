import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fees: Array(12).fill({ electric: 0, water: 0, maintenance: 0 }),
};

const feeSlice = createSlice({
  name: 'fees',
  initialState,
  reducers: {
    setFee: (state, action) => {
      const { month, type, amount } = action.payload;
      state.fees[month - 1][type] = amount; // 월의 인덱스와 타입에 따라 금액 설정
    },
  },
});

export const { setFee } = feeSlice.actions;
export default feeSlice.reducer;