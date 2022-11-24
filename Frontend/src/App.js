
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer';

import Home from './Component/Home';
import Nav from './Component/Nav';
import ProductDetail from './Component/ProductDetail';
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./Reduxtoolkit/ProductSlice";
import Cart from './Component/Cart';




function App() {
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.products.data)
  React.useEffect(() => {
    dispatch(fetchProducts());
  },[dispatch]);

  return (
   <>
     <Nav/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:productId" element={<ProductDetail  data={data} />}/>
      <Route path="/cart" element={<Cart/>}/>

      
      <Route path="*" element={<h1>404 not found</h1>}/>
     </Routes>
     <Footer/>

   </>

  );
}

export default App;
