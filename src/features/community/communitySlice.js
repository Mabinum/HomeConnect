import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  communityList: [],
}

const communitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {
    
  }
});

export const {
  
} = communitySlice.actions;

export const selectCommunityList = state => state.community.communityList;

export default communitySlice.reducer;