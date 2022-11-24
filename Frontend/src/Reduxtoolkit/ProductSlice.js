import {createSlice} from "@reduxjs/toolkit";



const initialState = {
    data: [],

};
const productSlice=createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.data =action.payload 
        },
      
    }


})

export const fetchProducts=()=>async(dispatch)=>{
    // dispatch(setStatus(STATUSES.LOADING))
    try{
        const response=await fetch('http://localhost:3000/products')
        const data=await response.json()
        dispatch(setProducts(data))
        // dispatch(setStatus(STATUSES.SUCCEEDED))
    }catch(e){
        // dispatch(setStatus(STATUSES.FAILED))
    }
}

export const {setProducts} = productSlice.actions;
export default productSlice.reducer
