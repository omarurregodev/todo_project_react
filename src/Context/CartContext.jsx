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

        if (isInCart(dataItem.id)) {
            const addedCartArr = [...productAdded];
            const found = productAdded.find(product => product.id === dataItem.id);
            found.quantity += dataItem.quantity;
            setProductAdded(addedCartArr);
        } else {
            setProductAdded([...productAdded, dataItem]);
        }
        console.log(productAdded);
        
    }


    const removeProduct = (id) => {

        const newProductAddedArray = productAdded.filter(productAdded => productAdded.id !== id)
        setProductAdded(newProductAddedArray);
        
    }

    const isInCart = (id) => {
        productAdded.some(product => product.id === id);
    }

    const clearCart = () => {
        setProductAdded([]);
        
    }


    return (
        <Provider value={{addNewProduct, cartWidgetValue, productAdded, removeProduct, getQtyProduct}}>
            {children}
        </Provider>
    )

}

export default CartProvider;