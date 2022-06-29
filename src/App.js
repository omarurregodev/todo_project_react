import React from 'react';
import Navbar from '../src/components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';


const App = () => {
  return (
    <>
      <Navbar initialCart='0' />
      <ItemListContainer titulo='Lista de items' stock='10' initialCount='1' />
    </> 
  );
}

export default App;
