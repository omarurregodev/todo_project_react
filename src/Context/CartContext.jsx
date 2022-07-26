import React, { useState, createContext } from "react";
import { useEffect } from "react";
import Swal from 'sweetalert2/dist/sweetalert2.all.js';




export const cartContexto = createContext();
const { Provider } = cartContexto;



const CartProvider = ({ children }) => {
    const [cartWidgetValue, setCartWidgetValue] = useState(0);
    const [productAdded, setProductAdded] = useState([]);

    const getQtyProduct = () => {
        let qty = 0;
        productAdded.forEach(products => {
            qty += products.quantity;
        });
        setCartWidgetValue(qty);
    }    

    useEffect(() => {
        getQtyProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productAdded])

    const addNewProduct = (dataItem) => {
        // console.log(dataItem.id);
        // const found = productAdded.find(product => product.id === dataItem.id);
        // console.log(found);
        const validationIsInCart = productAdded.some(product => product.id === dataItem.id);
        if (validationIsInCart) {
            const addedCartArr = [...productAdded];
            const found = addedCartArr.find(product => product.id === dataItem.id);
            let foundqty = found.quantity;
            let foundqtyNew = foundqty + dataItem.quantity;
            if (foundqtyNew > dataItem.stock) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Supera el stock disponible',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else if (foundqtyNew <= dataItem.stock) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Se ha modificado el item con éxito',
                    showConfirmButton: false,
                    timer: 1500
                })
                found.quantity = dataItem.quantity;
                setProductAdded(addedCartArr);
            } 
        } else {
            setProductAdded([...productAdded, dataItem]);
        }
      
    }


    const removeProduct = (id) => {
        const addedCartArr = [...productAdded];
        const newProductAddedArray = addedCartArr.filter(productAdded => productAdded.id !== id);
        setProductAdded(newProductAddedArray);
        const nameObject = addedCartArr.find(productoAdded => productoAdded.id === id);
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Has eliminado el producto ' + nameObject.name,
            showConfirmButton: false,
            timer: 1500
        })
        if (newProductAddedArray.length === 0) {
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'Has vaciado tu carrito',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    const isInCart = (id) => {
        // const validationIsInCart = productAdded.some(product => product.id === id);
        // console.log(validationIsInCart);
    }

    const clearCart = () => {
        setProductAdded([]);
    }


    return (
        <Provider value={{addNewProduct, cartWidgetValue, productAdded, removeProduct, getQtyProduct, clearCart}}>
            {children}
        </Provider>
    )

}

export default CartProvider;