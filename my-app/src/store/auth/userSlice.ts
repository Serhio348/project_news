import { createSlice } from "@reduxjs/toolkit";
import Storage from "../../helpers/Storage";

type StoreType = {
    email: string,
    token: string,
    id: string,
    logged: boolean,
}
export const initialState: StoreType = {
    email: "",
    token: "",
    id: "",
    logged: Storage.get("access", false)
}
const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.logged = true;
        },
        removeUser: (state) => {
            state.email = "";
            state.token = "";
            state.id = "";
            state.logged = false;
            Storage.remove("access")
        }
    }
})

export const userReducer = userSlice.reducer;
export const userActions = {
    ...userSlice.actions
};

