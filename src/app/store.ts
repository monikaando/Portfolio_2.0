import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "../features/navigation/navigation-slice";

export const store = configureStore({
  //if we will pass object we can combine all reducers together
  reducer: { navigation: navigationReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
