import React from 'react';
import Logo from '../../assets/img/Logo_omar_blanco.svg';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from "react-router-dom";
import { db } from '../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useState } from 'react';




const Navbar = () => {

    const [ categories, setCategories ] = useState([]);

    
    const categoriesCollection = collection(db, 'category');

    getDocs(categoriesCollection).then(result => {
        const categoriesList = result.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        })
        setCategories(categoriesList)
    }, []);


 

    return (
        <>
            <nav style={styles.backgroundColorNav} className="teal">
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
        position: 'fixed',
        height: '4.5rem',
        zIndex: '2',
        top:'0'
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
