import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fees: Array(12).fill(0),
};

const feeSlice = createSlice({
  name: 'fees',
  initialState,
  reducers: {
    setFee: (state, action) => {
      const { month, amount } = action.payload;
      state.fees[month - 1] = amount;
      console.log(action);
    },
  },
});

export const { setFee } = feeSlice.actions;

export default feeSlice.reducer;