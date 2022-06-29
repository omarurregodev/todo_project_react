import React from 'react';
import Logo from '../../src/assets/img/Logo_omar_blanco.svg';
import CartWidget from '../components/CartWidget';


const Navbar = () => {
    return (
        <>
            <nav style={styles.backgroundColorNav}>
                <div className="nav-wrapper">
                <a href="#index.html" className="brand-logo"><img className='responsive-img' src={Logo} alt="Logo_omar" style={styles.img_logo}/></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#index">Home</a></li>
                    <li><a href="#index">Tienda</a></li>
                    <li><a href="#index">Inciar Sesión</a></li>
                    <CartWidget />
                </ul>
                </div>
            </nav>
        </>
        
    )
}

export default Navbar;

const styles = {
    backgroundColorNav: {
        background: 'rgba(40, 61, 59, 1)',
    },

    img_logo: {
        height: '3.5rem',
        marginTop: '0.4rem',
        marginLeft: '1.5rem'
    }
}
