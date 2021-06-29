import { getAnalytics } from "firebase/analytics";
import { createSlice } from "@reduxjs/toolkit";

export const analytics = createSlice({
  name: "analytics",
  initialState: {
    value: getAnalytics(),
  },
});

export default analytics.reducer;
