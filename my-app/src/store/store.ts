import { configureStore } from "@reduxjs/toolkit"
import reducer from "./reducer";

const store = configureStore({
    reducer
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;