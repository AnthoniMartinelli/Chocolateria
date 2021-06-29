import { initializeApp } from "firebase/app";
import { createSlice } from "@reduxjs/toolkit";
import { firebaseConfig } from "./dados";

export const initialize = createSlice({
  name: "initialize",
  initialState: {
    value: initializeApp(firebaseConfig),
  },
  reducers: {
    testar: (state) => console.log(state),
  },
});

export default initialize.reducer;
