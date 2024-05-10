import { createSlice } from "@reduxjs/toolkit";
import { communityDB } from "../assets/firebase";

const communitySlice = createSlice({
  name: "communitys",
  initialState: {
    allList: [],
    type: "All",
    currentList: [],
  },
  reducers: {
    initCommunity(state, action) {
      state.allList = action.payload.sort((a, b) => (a.key > b.key ? -1 : 1));
      state.currentList = action.payload.sort((a, b) =>
        a.key > b.key ? -1 : 1
      );
    },
    changeType(state, action) {
      state.type = action.payload;
      if (state.type === "All") {
        state.currentList = state.allList;
      } else if (state.type === "news") {
        state.currentList = state.allList.filter(
          (val) => val.category === "news"
        );
      } else if (state.type === "interview") {
        state.currentList = state.allList.filter(
          (val) => val.category === "interview"
        );
      } else if (state.type === "notice") {
        state.currentList = state.allList.filter(
          (val) => val.category === "notice"
        );
      }
    },
    searchCommunity(state, action) {
      let { searchCategory, text } = action.payload;
      if (searchCategory === "title") {
        state.currentList = state.allList.filter((val) =>
          val.title.includes(text)
        );
      } else if (searchCategory === "content") {
        state.currentList = state.allList.filter((val) =>
          val.content.includes(text)
        );
      }
    },
  },
});

export const { initCommunity, changeType, searchCommunity } =
  communitySlice.actions;

export const fetchCommunity = () => async (dispatch) => {
  try {
    communityDB.on("value", (snapshot) => {
      const communityObj = snapshot.val();
      const communityArr = Object.entries(communityObj).map(([key, value]) => {
        return { key: key, ...value };
      });
      dispatch(initCommunity(communityArr));
    });
  } catch (err) {
    console.log(err);
  }
};

export default communitySlice.reducer;
