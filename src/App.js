import React from 'react'
import Product from './Pages/Product'
import Home from "./Pages/Home"
import ProductList from './Pages/ProductList'
import Register from './Pages/Register'
import Cart from './Pages/Cart'
import Login from "./Pages/Login"
import { Route, Routes, BrowserRouter } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path='/productList' element={<ProductList />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App