import React, { useContext } from "react";
import { cartContexto } from '../../Context/CartContext';
import RemoveItemCart from "./ItemCartBtn";


const Cart = () => {

    const { productAdded } = useContext(cartContexto);
    //const { removeProduct } = useContext(contexto);


    // const removeProductCart = (id) => {
    //     removeProduct(id);
    // }

    return (
        <div className="container center-align">
            <h3>Listado Carrito de Compras</h3>
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
                            <h4>{data.name}</h4>
                        </div>
                        <RemoveItemCart id={data.id}></RemoveItemCart>
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