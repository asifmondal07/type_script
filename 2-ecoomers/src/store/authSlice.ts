import {createSlice} from "@reduxjs/toolkit"
import type {PayloadAction} from "@reduxjs/toolkit"

interface userData {
    id: string;
    name: string;
    email: string;
    
}

interface loginPlayLoad {
    userData: userData;
    token: string;
}

interface AuthState {
    status: boolean;
    userData: userData | null;
    token: string | null;
}


const initialState:AuthState = {

        status: false,
        userData: null,
        token: null,
    }


    

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login:(state,action:PayloadAction< loginPlayLoad>)=>{
            state.status = true;
            state.userData = action.payload.userData;
            state.token = action.payload.token;
        },
        logout:(state)=>{
            state.status = false;
            state.userData = null;
            state.token = null;
        }
    }
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;