import React, {useEffect, useState} from 'react';
import actions from '../api'
import './ItemDetails.css';

function ItemDetails(props) {
    // console.log(props.match.params.id)
    const [item, setItem] = useState({})
    console.log(item)




    useEffect(() => {
        actions.searchItemById(props.match.params.id).then(res => {
            setItem(res.data[0])
                                        // console.log(res.data, '***', item)
        }).catch(console.error)
                                        // console.log('final Item', item)
    }, [])

<<<<<<< HEAD
    

    // console.log('Prams ***********', props.match.params)

    console.log('after', item)

    return (
        <div className="Single-item-details">
                <img src={item.image_url} style={{width:"28vw", height:'55vh'}}/>
                <div><h1>{item.item}</h1></div> 
                <div><h2>{item.price}</h2></div> 
                <div style={{width:"28vw"}}><p>{item.description}</p></div> 
                <div><button>buy</button></div>
=======
    // console.log('final Item', item)
    const addItemToShopping = (item)=> {
        //   console.log('type of Sh**********',shoppingCart)
        let newCart = [...props.shoppingCart]
            newCart.push(item)
          props.setShoppingCart(newCart)
          console.log(props.shoppingCart)
     }

    return (
        <div className="Single-item-details">
            <div style={{justifyContent:'center'}}> 
                <img src={item.image_url} alt='Vacantiom Details Image'/>
                <div><h2>{item.item}</h2></div> 
                <div><h2>${item.price}</h2></div> 
                <div style={{width:"28vw"}}><p>{item.description}</p></div> 
                <button style={{padding:'0 1rem'}} onClick={(e) => addItemToShopping(item)} >buy</button>
            </div>
>>>>>>> aa34240781abde528572458e57fa5387d45f10ad
        </div>
    );
}

export default ItemDetails;