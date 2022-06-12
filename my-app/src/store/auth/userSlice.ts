import { createSlice } from "@reduxjs/toolkit";

type StoreType = {
    email: string,
    token: string,
    id: string,

}
export const initialState: StoreType = {
    email: "",
    token: "",
    id: "",

}
const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = "";
            state.token = "";
            state.id = "";
        }
    }
})

export const userReducer = userSlice.reducer;
export const { setUser, removeUser } = userSlice.actions;

