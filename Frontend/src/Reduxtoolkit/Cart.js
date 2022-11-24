import {createSlice} from "@reduxjs/toolkit";

const initalState=JSON.parse(localStorage.getItem("cart"))||[];


const Setlocalstorage=(state)=>{
    try{    
    localStorage.setItem("cart",JSON.stringify(state))
    }
    catch(e){
        console.log(e)
    }

}
const UserSlice=createSlice({
    name:"cart",
    initialState:initalState,
    reducers:{
        addtocart:(state,action)=>{
            state.push(action.payload)
            Setlocalstorage(state)
        },
        removefromcart:(state,action)=>{
            const indexs=state.filter((item,i)=>i!==action.payload)
            if(indexs){
                Setlocalstorage(indexs)
                return indexs
            }
        },
    }
})
export const {addtocart,removefromcart}=UserSlice.actions
export default UserSlice.reducer