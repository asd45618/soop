import { configureStore } from "@reduxjs/toolkit";
import artistReducer from "./artist";
import communityReducer from "./community";
import memberReducer from "./member";

const store = configureStore({
  reducer: {
    artists: artistReducer,
    communitys: communityReducer,
    members: memberReducer,
  },
});

export default store;
