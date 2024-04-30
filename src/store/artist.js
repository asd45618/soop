import { createSlice } from "@reduxjs/toolkit";

const artistSlice = createSlice({
  name: "artists",
  initialState: {
    currentArtist: "GONG YOO",
  },
  reducers: {
    changeCurrentArtist(state, action) {
      state.currentArtist = action.payload;
    },
  },
});

export const { changeCurrentArtist } = artistSlice.actions;

export default artistSlice.reducer;
