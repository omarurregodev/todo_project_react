import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';



//let contador = 1;

const CartWidget = ({initialCart}) => {
    return (
        <>
            <FaCartArrowDown className='valign-wrapper' style={styles.iconSize}/>
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
        fontSize: '3rem',
        paddingRight: '1rem',
        
    },
    contadorCartNumber: {
        fontSize: '1.5rem',
        paddingRight: '2rem',
    }
}