
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Component/Home';
import Nav from './Component/Nav';
import ProductDetail from './Component/ProductDetail';




function App() {

  return (
   <>
     <Nav/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:productId" element={<ProductDetail/>}/>
  

  


     </Routes>

   </>

  );
}

export default App;
