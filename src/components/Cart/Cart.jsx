import React, { useContext, useState, useEffect } from "react";
import { cartContexto } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from "../ItemCount/ItemCount"; 
import FinalizedForm from "../FinalizedForm/FinalizedForm";
import { db } from '../../firebase/firebase';
import { doc, addDoc, collection, serverTimestamp, updateDoc } from 'firebase/firestore';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

const Cart = () => {

    const { productAdded } = useContext(cartContexto);
    const { clearCart } = useContext(cartContexto);
    const { removeProduct } = useContext(cartContexto);  
    const { addNewProduct } = useContext(cartContexto);

    const [idVenta, setIdVenta] = useState('');

    

    
    let totalPriceValue = 0;
    
    productAdded.forEach(products => {
        totalPriceValue += products.quantity * products.price;
    });
   
    const finalizarCompra = (data) => {
        const ventasCollection = collection(db, 'ventas');
        addDoc(ventasCollection, {
            data,
            items: productAdded,
            date: serverTimestamp(),
            total: totalPriceValue,
        }).then((result) => {
            setIdVenta(result.id)
        });

        productAdded.forEach((item) => {
            const updateCollection = doc(db, 'items', item.id)
            updateDoc(updateCollection,{
                stock: item.stock - item.quantity,
            })
        })  
    }

    useEffect(() => {
        if (idVenta.length > 0) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se ha registrado la compra en el sistema con el siguiente id: '+ idVenta,
                showConfirmButton: false,
                timer: 2000
            });
        }
    })
    


    return (
        <div className="container center-align" style={styles.containerGeneral}>
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
                    const OnAdd = (contador) => {
                        addNewProduct({...data, quantity: contador});
                    }
                    return (
                        <div  key={data.id} className="row valign-wrapper z-depth-3">
                            <div className="col s2 m2 l2">
                                <img style={styles.imgCartItem} src={data.url} alt="" />
                            </div>
                            <div className="col s6 m6 l6">
                                <div className="row">
                                    <h4>{data.name}</h4>
                                </div>
                                <div className="row">
                                    <h6>Cantidad: {data.quantity}</h6>
                                    <h6>Precio total: $ {data.quantity * data.price}</h6>
                                </div>
                            </div>
                            <div className="col s4 m4 l4 align-center valign-wrapper" style={styles.btnCartItem}>
                                <div className="col">
                                    <ItemCount stock={data.stock} initial={0} OnAdd={OnAdd} modificar="Modificar cantidad" count={data.quantity}></ItemCount>
                                </div>
                                <div className="col">
                                    <button className="waves-effect waves-light btn-small red lighten-2" onClick={() => {removeProduct(data.id)}}>Eliminar Item</button>
                                </div>
                            </div>
                        </div> 
                    )
                }
            )}
            {productAdded.length === 0
            ? <span></span>
            : <>
                <div className="row">
                    <h4 className="right-align">Precio total: $ {totalPriceValue}</h4>
                </div>
                <div className="row" style={styles.formContainer}>
                    <FinalizedForm fCompra={finalizarCompra}/>
                </div>
            </>
            }
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
    },
    containerGeneral: {
        paddingTop:'4.5rem',
    },
    formContainer: {
        paddingBottom: '3rem'
    }
}