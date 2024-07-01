import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "../features/main/mainSlice";
import boardSlice from "../features/board/boardSlice";
import feeReducer from '../features/fee/feeSlice';
import communitySlice from "../features/community/communitySlice";

export const store = configureStore({
  reducer : {
    main : mainSlice,
    board : boardSlice,
    fees: feeReducer,
    community: communitySlice,
  },
});