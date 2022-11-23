import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './ProductSlice'
import Cart from './Cart'
export const store = configureStore({
  reducer:{
    products: ProductSlice,
    cart:Cart
  }
})


