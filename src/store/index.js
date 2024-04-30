import { configureStore } from "@reduxjs/toolkit";
import artistReducer from "./artist";

const store = configureStore({
  reducer: {
    artists: artistReducer,
  },
});

export default store;
