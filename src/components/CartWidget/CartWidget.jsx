import React, { useContext } from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import { cartContexto } from '../../Context/CartContext';



const CartWidget = () => {

    const { cartWidgetValue } = useContext(cartContexto);
    const quantityCart = cartWidgetValue;

    return (
        <>
            <FaCartArrowDown /> <span>{quantityCart === 0 ? "" : quantityCart}</span>
        </>
    )
}

export default CartWidget;
