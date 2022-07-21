import React, { useState, createContext } from "react";



export const contexto = createContext();
const { Provider } = contexto;



const CartProvider = ({ children }) => {
    const [cartWidgetValue, setCartWidgetValue] = useState(0);

    const addCartWidgetValue = (count) => {
        if (cartWidgetValue > 0) {
            setCartWidgetValue(cartWidgetValue + count);
            console.log("estoy enviando el valor de items   " + cartWidgetValue);
        } else {
            setCartWidgetValue(count);
        }
    }
    return (
        <Provider value={{addCartWidgetValue, cartWidgetValue}}>
            {children}
        </Provider>
    )

}

export default CartProvider;