import React, {useState, useEffect, useContext} from 'react';
import actions from '../api';
import {CartContext} from './CartContext';
import './ShoppingCart.css'
// import {shoppingCart} from './storeFrontDesk';   
function ShopingCart(props) {

    const showItems =()=>{


        // props.ShopingCart
        const itemsToBuy = props.shoppingCart
        console.log(props.shoppingCart, '**********')
        const grandTotal = itemsToBuy.reduce((acc, cur) => acc+cur.price,0)
        return itemsToBuy.map(eachE => {
            return(

                <div className="check-out-items" key={eachE._id}>
                    <div><img src={eachE.image_url} alt='picture'/></div>
                    <div><h5>{eachE.item}</h5></div>
                    <div><p>${eachE.price}</p></div>
                    <div style={{display:'flex'}}>
                    <div><p>Qty: 1</p></div>
                    {/* <button onClick={(e) => addToCart(eachE._id)} > + </button>
                    <button onClick={(e) => removeFromCart(eachE)} > - </button> */}
                    </div>
                    <p>Total:{eachE.qty*eachE.price}</p>

                </div>
                
            )
        })
    }

    return (
        <div style={{display:'flex'}}>
            <div  className="ShoppingCart-main">


            {showItems()}

       
            </div>
            <div style={{backgroundColor:'white',marginLeft:'1vw', width:'23vw', height:'60vh', border:'2px solid gainsboro'}}>
                    <div style={{ width:'23vw'}}>
                        <h5 style={{float:'right', marginRight:'1vw'}}>Grand Total: $1000</h5>                  
                    </div>
                    <button style={{position:'absolute', bottom:'180px'}}>Proceed to check out</button>
            </div>

        </div>
    );

}

export default ShopingCart;