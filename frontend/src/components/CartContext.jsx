import React, { useState } from 'react';


export const CartContext = React.createContext();

export const CartProvider = (props) => {

    const [shoppingCart, setShoppingCart] = useState([])

    return(
        <CartContext.Provider value={[shoppingCart, setShoppingCart]}>
            {props.children}
        </CartContext.Provider>
    )
}   