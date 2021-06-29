import { createSlice } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";

export const auth = createSlice({
  name: "auth",
  initialState: {
    value: getAuth(),
  },
});

export default auth.reducer;
