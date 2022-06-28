import React from 'react';
import Navbar from '../src/components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import Swal from '../node_modules/sweetalert2/dist/sweetalert2.js';

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer titulo='Lista de items'/>
    </> 
  );
}

export default App;
