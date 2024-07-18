import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  communityList: []
}

const communitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.communityList = action.payload;
    },
    setCommunityList: (state, action) => {
      state.communityList = action.payload;
    }
  }
});

export const {
  selectCategory, setCommunityList
} = communitySlice.actions;

export const selectCommunityList = state => state.community.communityList;
export const selectCategoryState = (state) => state.community.category;

export default communitySlice.reducer;