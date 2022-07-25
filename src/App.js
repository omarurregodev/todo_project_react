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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACq5Ybq_SUOwEahCHBDJhoYf5Popt-RjU",
  authDomain: "ecommerce-project-reactjs.firebaseapp.com",
  projectId: "ecommerce-project-reactjs",
  storageBucket: "ecommerce-project-reactjs.appspot.com",
  messagingSenderId: "264127430370",
  appId: "1:264127430370:web:9822d975e67e2c505ce8bb",
  measurementId: "G-0N2TVXBSP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


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
        </Routes>
      </CartProvider>
    </BrowserRouter>

  );
}

export default App;
