import { configureStore } from "@reduxjs/toolkit";
import artistReducer from "./artist";
import productReducer from "./product";
import communityReducer from "./community";
import memberReducer from "./member";

const store = configureStore({
  reducer: {
    artists: artistReducer,
    products: productReducer,
    communitys: communityReducer,
    members: memberReducer,
  },
});

export default store;
