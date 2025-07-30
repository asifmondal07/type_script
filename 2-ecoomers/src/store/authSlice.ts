import {createSlice} from "@reduxjs/toolkit"
import type {PayloadAction} from "@reduxjs/toolkit"

interface UserData {
  id: string;
  name: string;
  email: string;
}

interface LoginPayload {
  userData: UserData;
  token: string;
}
interface ProductsData{
    id: number;
    title: string;
    price: number | string;
    description: string;      
    category: string;
    image: string;
}

interface AuthState {
  status: boolean;
  userData: UserData | null;
  token: string | null;
  products: ProductsData[];
}


const initialState:AuthState = {

        status: false,
        userData: null,
        token: null,
        products: [],
    }


    

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login:(state,action:PayloadAction<LoginPayload>)=>{
            state.status = true;
            state.userData = action.payload.userData;
            state.token = action.payload.token;
        },
        logout:(state)=>{
            state.status = false;
            state.userData = null;
            state.token = null;
        },
        addTocart:(state, action: PayloadAction<ProductsData>)=>{
           state.products.push(action.payload);
            
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
                       const index = state.products.findIndex(p => p.id === action.payload);
                        if (index !== -1) {
                        state.products.splice(index, 1);
                        }
                        
        }

    }
})

export const {login, logout , addTocart,removeFromCart } = authSlice.actions;
export default authSlice.reducer;
