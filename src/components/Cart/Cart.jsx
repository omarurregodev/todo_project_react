import React, { useContext, useEffect } from "react";
import { cartContexto } from '../../Context/CartContext';
import { Link } from 'react-router-dom';


const Cart = () => {

    const { productAdded } = useContext(cartContexto);
    const { clearCart } = useContext(cartContexto);
    const { removeProduct } = useContext(cartContexto);
    
    

    
    let totalPriceValue = 0;
    
    productAdded.forEach(products => {
        totalPriceValue += products.quantity * products.price;
    });
   

    


    return (
        <div className="container center-align">
            <div className="row">
                <h3>Listado Carrito de Compras</h3>
                <button className="waves-effect waves-light btn-small" onClick={clearCart}>Vaciar el Carrito</button>
            </div>
            {
                productAdded.length === 0
                ? <><h3>No has agregado productos todavia.</h3>
                    <Link to='/'>
                        <button className="waves-effect waves-light btn-small orange darken-1">Ver Catalogo</button>
                    </Link></>
                : productAdded.map((data) => {
                    return (
                        <div  key={data.id} className="row valign-wrapper z-depth-3">
                            <div className="col s1 m1 l1">
                                <h4>ID: {data.id}</h4>
                            </div>
                            <div className="col s2 m2 l2">
                                <img style={styles.imgCartItem} src={data.url} alt="" />
                            </div>
                            <div className="col s5 m5 l5">
                                <div className="row">
                                    <h4>{data.name}</h4>
                                </div>
                                <div className="row">
                                    <h6>Cantidad: {data.quantity}</h6>
                                    <h6>Precio total: $ {data.quantity * data.price}</h6>
                                </div>
                            </div>
                            <div className="col s4 m4 l4" style={styles.btnCartItem}>
                                <Link to={`/product/${data.id}`}>
                                    <button className="waves-effect waves-light btn-small blue lighten-1">Modificar</button>
                                </Link>
                                <button className="waves-effect waves-light btn-small red lighten-2" onClick={() => {removeProduct(data.id)}}>Eliminar</button>
                            </div>
                        </div> 
                    )
                }
            )}
            <div className="row">
                <h3>Precio total: $ {totalPriceValue}</h3>
            </div>
        </div>
    )
}

export default Cart;

const styles = {
    
    imgCartItem: {
        maxWidth: '6rem'
    },
    btnCartItem: {
        gap: '1rem'
    }
}