import { roles } from '@/models/roles';
import  {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user:null as any
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        login(state,action){
            state.user = {
                id:1,
                role:roles.regular
            }
        },
        logout(state){
            state.user = null;
        }
    }
})

export const {login,logout}  = authSlice.actions;
export default authSlice;