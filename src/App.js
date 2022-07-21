import React from 'react';
import Navbar from '../src/components/Navbar/NavBar';
import ItemListContainer from '../src/Containers/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from '../src/Containers/ItemDetailsContainer/ItemDetailContainer';
import Cart from '../src/components/Cart/Cart';
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from '../src/Context/CartContext';


const App = () => {

  return (

    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenido' />} />
          <Route path='/category/:categoryName' element={<ItemListContainer greeting='Bienvenido'/>}/>
          <Route path='product/:itemId' element={<ItemDetailsContainer />}/>
          <Route path='/cart' element={<Cart />} />
          <Route></Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>

  );
}

export default App;
