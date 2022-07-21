import React, { useContext } from "react";
import { cartContexto } from '../../Context/CartContext';


const RemoveItemCart = (id) => {

    
    const { removeProduct } = useContext(cartContexto);


    const removeProductCart = (id) => {
        removeProduct(id);
    }

    return (
        <div className="col s4 m4 l4" style={styles.btnCartItem}>
            <button className="btn-small">Modificar</button>
            <button className="btn-small">Eliminar</button>
        </div>
    )
}

export default RemoveItemCart;

const styles = {
    
    imgCartItem: {
        maxWidth: '2rem'
    },
    btnCartItem: {
        gap: '1rem'
    }
}