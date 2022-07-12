import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';



//let contador = 1;

const CartWidget = ({initialCart}) => {
    return (
        <>
            <li style={styles.botonCart}><a href="#shopping_cart" style={styles.iconSize}><FaCartArrowDown /></a><span style={styles.contadorCartNumber}>{initialCart}</span></li>
        </>
    )
}

export default CartWidget;

const styles = {
    botonCart: {
        display: 'flex',
        alignItems: 'center',
    },

    iconSize: {
        fontSize: '2rem',
        margin: '0 auto',
        paddingRight: '1rem',
    },
    contadorCartNumber: {
        fontSize: '1.5rem',
        paddingRight: '2rem',
    }
}