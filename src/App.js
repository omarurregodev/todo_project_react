import React from 'react';
import Navbar from '../src/components/NavBar';
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css'

const App = () => {
  return (
    <>
      <Navbar />
      <h2>Las ofertas de la semana</h2>
    </> 
  );
}

export default App;
