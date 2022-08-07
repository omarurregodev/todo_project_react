import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {



    return (
        <footer className="page-footer teal" style={styles.footerPosition}>
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">E-commerce de Omar</h5>
                <p className="grey-text text-lighten-4">Tienda virtual desarrollada con React.js y materialized, para el proyecto final del curso ReactJS de Coderhouse.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                    <Link to={'/'}><li><a className="grey-text text-lighten-3" href="#!">Home</a></li></Link>
                    <Link to={'/cart'}><li><a className="grey-text text-lighten-3" href="#!">Carrito de compras</a></li></Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2022 Made by <a className="grey-text text-lighten-4" href="#!">me.</a>
            </div>
          </div>
        </footer>
        )
}

export default Footer;

const styles = {
    footerPosition: {
        width: '100%',
        zIndex: '2',
        position: 'relative',
        bottom: '0'
    }
}

