import React from 'react'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/Products/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Navbar/Home'
import About from './components/Navbar/About'
import Contact from './components/Navbar/Contact'
import Cart from './components/Navbar/Cart'


const App = () =>{


  return (
    <BrowserRouter>
      <NavBar />

      <Routes>

    {/* <ItemListContainer/>
    <ItemDetailContainer/> */}
      <Route exact path="/" element={<ItemListContainer />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/category/:category" element={<ItemListContainer />} />
      <Route exact path="/item/:id" element={<ItemDetailContainer />} />


      </Routes>

      </BrowserRouter>
  )
}

export default App
