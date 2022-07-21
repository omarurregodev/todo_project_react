import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';




//let contador = 1;

const CartWidget = ({cartWidgetValue}) => {
    return (
        <>
            <FaCartArrowDown /> <span>{cartWidgetValue}</span>
        </>
    )
}

export default CartWidget;

const styles = {


}