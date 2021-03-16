import React, {useState, useEffect, useContext} from 'react';
import actions from '../api';
import {CartContext} from './CartContext';
import './ShoppingCart.css'
// import {shoppingCart} from './storeFrontDesk';   
function ShopingCart(props) {

    const addToCart = (item) => {
        actions.addItemtoCart(item)
    }
    const removeFromCart = () => {}

    const showItems =()=>{


        // props.ShopingCart
        let itemsToBuy = props.shoppingCart
        return itemsToBuy.map(eachE => {
            return(

                <div className="check-out-items">
                    <img src={eachE.image_url} alt='picture'/>
                    <h5>{eachE.item}</h5>
                    <p>{eachE.price}</p>
                    <div style={{display:'flex'}}>
                    <p>Qty: 3</p>
                    {/* <button onClick={(e) => addToCart(eachE._id)} > + </button>
                    <button onClick={(e) => removeFromCart(eachE)} > - </button> */}
                    </div>
                    <p>Total:{3*eachE.price}</p>

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