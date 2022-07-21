import React, { useState, createContext } from "react";
import { useEffect } from "react";




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
            found.quantity += dataItem.quantity;
            setProductAdded(addedCartArr);
            console.log("repetido");
        } else {
            setProductAdded([...productAdded, dataItem]);
            console.log('nop entro donde es');
        }
        console.log(productAdded);       
    }


    const removeProduct = (id) => {
        const addedCartArr = [...productAdded];
        const newProductAddedArray = addedCartArr.filter(productAdded => productAdded.id !== id)
        setProductAdded(newProductAddedArray);
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