import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: [],
  imageUrl: "",
};

export const antavieSlice = createSlice({
  name: "antavie",
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
    setImageUrl: (state, action) =>  {
      state.imageUrl = action.payload;
    },
  },
});

export const { setBannerData, setImageUrl } = antavieSlice.actions;

export default antavieSlice.reducer;
