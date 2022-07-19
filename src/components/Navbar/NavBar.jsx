import React from 'react';
import Logo from '../../assets/img/Logo_omar_blanco.svg';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from "react-router-dom";



const Navbar = ({initialCart}) => {

    const categories = [
        {name: "Camisetas", id: 0, route: "/category/camisetas"},
        {name: "Tazas", id: 1, route: "/category/tazas"},
        {name: "Cuadernos", id: 2, route: "/category/cuadernos"},
    ]

    return (
        <>
            <nav style={styles.backgroundColorNav}>
                <Link className='brand-logo' to={'/'}>
                    <img className='responsive-img' src={Logo} alt="Logo_omar" style={styles.img_logo}/>
                </Link>
                <div className="nav-wrapper" style={styles.links}>
                    <Link to={'/'}>
                        <a href='/' style={styles.link}>Home</a>
                    </Link>  
                    {categories.map((category) => <NavLink key={category.id} to={category.route} style={styles.link}>{category.name}</NavLink>)}
                    <Link to={'/cart'} style={styles.botonCart} >
                        <CartWidget />
                    </Link>
                </div>
            </nav>
        </>
        
    )
}

export default Navbar;

const styles = {
    links: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "end",
    },
    link: {
        padding: '0rem 2rem',
        textDecoration: 'none',
    },
    backgroundColorNav: {
        background: 'rgba(40, 61, 59, 1)',
    },

    img_logo: {
        height: '3.5rem',
        marginTop: '0.4rem',
        marginLeft: '1.5rem',
        cursor: 'pointer'
    },
    botonCart: {
        fontSize: '2rem',
        paddingRight: '1rem'
    },
}
