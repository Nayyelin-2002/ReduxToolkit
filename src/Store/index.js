// import { legacy_createStore as createStore } from "redux";
// const initialstate = { counter: 0, isshow: true };
// const counterReducer = (state = initialstate, action) => {
//   if (action.type === "INC") {
//     return {
//       ...initialstate,

//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === "DEC") {
//     return {
//       ...initialstate,
//       counter: state.counter - 1,
//     };
//   }
//   if (action.type === "NO") {
//     return {
//       ...initialstate,
//       isshow: !state.isshow,
//     };
//   }
//   return state;
// };
// const store = createStore(counterReducer);

// export default store;

import { configureStore, createSlice } from "@reduxjs/toolkit";
import todoSlice from "../Store/reducer/todo";
const initialCounterState = {
  counter: 0,
  isshow: true,
};
const counterslice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    inc(state) {
      state.counter++;
    },
    dec(state) {
      state.counter--;
    },
    incby5(state, action) {
      state.counter = state.counter + action.payload;
    },
    toogel(state) {
      state.isshow = !state.isshow;
    },
  },
});

const initialauthstate = { islogin: false, islogout: true };
const authslice = createSlice({
  name: "auth",
  initialState: initialauthstate,
  reducers: {
    login(state) {
      state.islogin = true;
      state.islogout = false;
    },
    logout(state) {
      state.islogin = false;
      state.islogout = true;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterslice.reducer,
    auth: authslice.reducer,
    todo: todoSlice.reducer,
  },
});

export const countersliceActions = counterslice.actions;
export const counterAuthActions = authslice.actions;
export default store;
