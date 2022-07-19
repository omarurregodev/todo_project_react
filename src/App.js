import React from 'react';
import Navbar from '../src/components/Navbar/NavBar';
import ItemListContainer from '../src/Containers/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from '../src/Containers/ItemDetailsContainer/ItemDetailContainer';
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Bienvenido' />} />
        <Route path='/category/:categoryName' element={<ItemListContainer greeting='Bienvenido'/>}/>
        <Route path='product/:itemId' element={<ItemDetailsContainer />}/>
        <Route></Route>
      </Routes>
    </BrowserRouter>

      // <Navbar initialCart='0' />
      // <ItemListContainer titulo='Lista de items' stock='10' initialCount={initialCount} />

  );
}

export default App;
