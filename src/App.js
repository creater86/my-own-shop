import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import WomenDress from './pages/WomenDress';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ShowProduct from './pages/ShowProduct';

import { useEffect } from "react";


function App() {

 const [cart,setCart] = useState(()=>{
  const savedCart = sessionStorage.getItem("cart")
  return savedCart ? JSON.parse(savedCart) : []
})
useEffect(()=>{
  sessionStorage.setItem("cart", JSON.stringify(cart))
},[cart])

  return (
    <div className="App">

      <Router>

        <Routes>

          <Route path='/' element={<Home/>}/>

          <Route path='/Product/:id' element={
            <ShowProduct cart={cart} setCart={setCart}/>
          }/>

          <Route path='/womenDress' element={<WomenDress/>}/>

          <Route path='/navigation' element={
            <Cart cart={cart} setCart={setCart}/>
          }/>

        </Routes>

      </Router>

    </div>
  );
}

export default App;