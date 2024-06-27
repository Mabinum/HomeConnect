// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   fees: Array(12).fill({ electric: 0, water: 0, maintenance: 0 }),
// };

// const feeSlice = createSlice({
//   name: 'fees',
//   initialState,
//   reducers: {
//     setFee: (state, action) => {
//       const { month, type, amount } = action.payload;
//       state.fees[month - 1][type] = amount; // 월의 인덱스와 타입에 따라 금액 설정
//     },
//   },
// });

// export const feeSlice = createSlice({
//   name: 'fees',
//   initialState: {
//     fees: [
//       { month: 1, electric: 5000, water: 3000, maintenance: 10000 },
//       { month: 2, electric: 6000, water: 3200, maintenance: 12000 },
//       { month: 3, electric: 5500, water: 3100, maintenance: 11000 },
//       { month: 4, electric: 6200, water: 3400, maintenance: 13000 },
//       { month: 5, electric: 7000, water: 3500, maintenance: 14000 },
//       { month: 6, electric: 6800, water: 3300, maintenance: 12000 },
//       { month: 7, electric: 7500, water: 3600, maintenance: 15000 },
//       { month: 8, electric: 7800, water: 3700, maintenance: 16000 },
//       { month: 9, electric: 7200, water: 3500, maintenance: 14000 },
//       { month: 10, electric: 6900, water: 3400, maintenance: 13000 },
//       { month: 11, electric: 6700, water: 3200, maintenance: 12000 },
//       { month: 12, electric: 7100, water: 3300, maintenance: 13000 },
//     ],
//   },
//   reducers: {
//     setFee: (state, action) => {
//       const { month, electric, water, maintenance } = action.payload;
//       const existingFee = state.fees.find(fee => fee.month === month);
//       if (existingFee) {
//         existingFee.electric = electric;
//         existingFee.water = water;
//         existingFee.maintenance = maintenance;
//       } else {
//         state.fees.push({ month, electric, water, maintenance });
//       }
//     },
//   },
// });

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFees = createAsyncThunk('fees/fetchFees', async () => {
  const response = await axios.get('http://localhost:8080/fee/list');
  return response.data;
});

export const addFee = createAsyncThunk('fees/addFee', async (feeData, { dispatch }) => {
  const response = await axios.post('http://localhost:8080/fee/register', feeData);
  dispatch(fetchFees()); // 데이터 추가 후 다시 불러오기
  return response.data;
});

const feeSlice = createSlice({
  name: 'fees',
  initialState: {
    fees: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFees.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFees.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.fees = action.payload;
      })
      .addCase(fetchFees.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addFee.fulfilled, (state, action) => {
        state.fees.push(action.payload);
      });
  },
});

export default feeSlice.reducer;