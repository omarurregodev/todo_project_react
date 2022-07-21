import React, { useContext } from "react";
import { cartContexto } from '../../Context/CartContext';



const Cart = () => {

    const { productAdded } = useContext(cartContexto);
    const { clearCart } = useContext(cartContexto);
    const { removeProduct } = useContext(cartContexto);


    return (
        <div className="container center-align">
            <h3>Listado Carrito de Compras</h3>
            <button className="btn-large" onClick={clearCart}>Vaciar el Carrito</button>
            {productAdded.map((data) => {
                return (
                    <div  key={data.id} className="row valign-wrapper z-depth-3">
                        <div className="col s1 m1 l1">
                            <h4>{data.id}</h4>
                        </div>
                        <div className="col s2 m2 l2">
                            <img style={styles.imgCartItem} src={data.url} alt="" />
                        </div>
                        <div className="col s5 m5 l5">
                            <div className="row">
                                <h4>{data.name}</h4>
                            </div>
                            <div className="row">
                                <h5>{data.quantity}</h5>
                            </div>
                        </div>
                        <div className="col s4 m4 l4" style={styles.btnCartItem}>
                            <button className="btn-small">Modificar</button>
                            <button className="btn-small" onClick={() => {removeProduct(data.id)}}>Eliminar</button>
                        </div>
                    </div> 
                )
            })}
        </div>
    )
}

export default Cart;

const styles = {
    
    imgCartItem: {
        maxWidth: '2rem'
    },
    btnCartItem: {
        gap: '1rem'
    }
}