// DUCKS pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavigationState {
  activeTab: string;
}

const initialState: NavigationState = {
  activeTab: "home",
};

const navigationsSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    changeTab(state, action: PayloadAction<string>) {
      // it's okay to do "mustation" because immer makes it immutable under the hood
      state.activeTab = action.payload;
    },
  },
});
export const { changeTab } = navigationsSlice.actions;
export default navigationsSlice.reducer;
