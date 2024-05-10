import { createSlice } from "@reduxjs/toolkit";
import { memberDB } from "../assets/firebase";

const memberSlice = createSlice({
  name: "members",
  initialState: {
    members: [],
    user: null,
    admin: false,
  },
  reducers: {
    initMembers(state, action) {
      state.members = action.payload;
    },
    userLogin(state, action) {
      state.user = action.payload;
      localStorage.loging = JSON.stringify(action.payload);
      if (action.payload.email === "123@naver.com") {
        localStorage.admin = JSON.stringify(true);
        state.admin = true;
      } else {
        localStorage.admin = JSON.stringify(false);
        state.admin = false;
      }
    },
    userLogout(state, action) {
      state.user = action.payload;
      state.admin = false;
      localStorage.clear();
    },
  },
});

export const { initMembers, userLogin, userLogout } = memberSlice.actions;

export const fetchMembers = () => async (dispatch) => {
  try {
    memberDB.on("value", (snapshot) => {
      const membersObj = snapshot.val();
      const membersArr = Object.entries(membersObj).map(([key, value]) => {
        return { key: key, ...value }; // 키와 값 모두 포함한 객체 생성
      });
      dispatch(initMembers(membersArr));
    });
  } catch (error) {
    console.error("오류:", error);
  }
};

export default memberSlice.reducer;
