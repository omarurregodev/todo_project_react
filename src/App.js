import React from 'react';
import Navbar from '../src/components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer titulo='Landing Page'/>
    </> 
  );
}

export default App;
