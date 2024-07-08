import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice= createSlice({
name: "auth",
initialState:{
      data:null,
      status:null,
      token:null,
},
reducers:{
      setData(state,action){
            state.data=action.payload

      },
      setStatus(state,action){
            state.status=action.payload

      },
      setToken(state,action){
state.token=action.payload
      }
}
}
)

export default authSlice.reducer
export const{setData,setStatus,setToken}=authSlice.actions //actions are the one to be called in the program

//creating async thunk

export function register(data){
      return async function registerThunk(dispatch){
            dispatch(setStatus("LOADING"))
            
           try {
            const response= await axios.post('https://react30.onrender.com/api/user/register',data)

            if(response.status===201){
                  dispatch(setStatus("SUCCESS"))
            }
                  else{
                  dispatch(setStatus("FAILED"))

                  }
           } catch (error) {
            dispatch(setStatus("FAILED"))
            
           }
                  

            }
      }


export function login(data)
{
      return async function loginThunk(dispatch){
            dispatch(setStatus('LOADING'))

            try {
                  const response= await axios.post('https://react30.onrender.com/api/user/login',data)
            if(response.status===200){
dispatch(setStatus('SUCCESS'))
localStorage.setItem('token',response.data.token)//  manual method

dispatch(setToken(response.data.token))

// alert(response.data.message)
            }

            else{
                  dispatch(setStatus('FAILED'))

            }
            } catch (error) {
                  dispatch(setStatus('FAILED'))
                  
            }
      }
}