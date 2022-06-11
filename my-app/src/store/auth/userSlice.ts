import { createSlice } from "@reduxjs/toolkit";

type StoreType = {
    email: any,
    token: any,
    id: any,

}
export const initialState: StoreType = {
    email: null,
    token: null,
    id: null,
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
            state.email = null;
            state.token = null;
            state.id = null;
        }
    }
})

export const userReducer = userSlice.reducer;
export const { setUser, removeUser } = userSlice.actions;

