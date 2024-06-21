import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "../features/main/mainSlice";
import boardSlice from "../features/board/boardSlice";

export const store = configureStore({
  reducer : {
    main : mainSlice,
    board : boardSlice,
  },
});