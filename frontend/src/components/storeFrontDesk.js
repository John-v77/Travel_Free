import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import actions from '../api'
import './Allitems.css'
import './Allitems-Mobile.css'



function StoreFrontDesk(props) {

    const [items, setItems] = useState([])
    const [sortBtn, setSortBtn] = useState(false)
// let valToExport = shoppingCart;
//  export valToExport

useEffect(() => {
    actions.getAllItems().then(res => {
                            setItems(res.data)
                        }).catch(console.error)
                        
                    }, [])

 
     const addItemToShopping = (item)=> {
        //   console.log('type of Sh**********',shoppingCart)
        let newCart = [...props.shoppingCart]
            newCart.push(item)
          props.setShoppingCart(newCart)
          console.log(props.shoppingCart)
       
     }


    //  const modifyItem = (itemID) =>{
    //      actions.modifyItem(itemID)
        
    //  }
           
    

    const showItems = () =>{
        
        return items.map(eachItem => {
            return(
                        <div key={eachItem._id} class="item-box">
                        <div style={{padding:'1vw'}}>
                            <img src={eachItem.image_url} alt="product picture"  style={{width:'15vw', height:'15vw', borderRadius:'6px'}}/>
                        </div>
                        <div>
                            <ul style={{listStyleType:"none"}}>
                                <li><Link to={`/ItemDetails/${eachItem._id}`}>{eachItem.item}</Link></li>
                                <li>${eachItem.price}</li>
                                <li>{eachItem.description}</li>
                            </ul>
                        </div>
                        
                        <div style={{marginBottom:'2vh',display:"flex", justifyContent:'flex-end'}}>
                            <button onClick={(e) => addItemToShopping(eachItem)} >buy</button>
                            {/* <button onClick={(e) => modifyItem(eachItem._id)} >modify</button> */}
                            <button onClick={(e) => deleteItem(eachItem._id)} className="del-Btn-StoreFront">delete</button>
                        </div>

                    </div>)
                    

        })
    }

    const deleteItem = (ItemId) =>{
        actions.delItem(ItemId)
        .then(res => {
            let copyItems = [...items]
            let filteredItems = copyItems.filter(eachItem => eachItem._id !== ItemId)
            setItems(filteredItems)
        })
    } 


    const sortItems = (e) => {
        // e.preventDefault()
        let sortedItems = [...items]
        
        if(sortBtn === false){
            sortedItems.sort((a,b) => {return(a.price-b.price)})
                     setItems(sortedItems)
                     setSortBtn(true)
        }else{
            sortedItems.sort((a,b) => {return(b.price-a.price)})
                     setItems(sortedItems)
                     setSortBtn(false)
        }
        
    }

    

    return (
        <>
            <div style={{float:'right'}}>
                <button  onClick={(e) => sortItems(e)} className="Sort-btn-AllItems"><b>sort by price</b></button>
            </div>
            <div className="All-items-display">
                
                {/* <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div>
                <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div>
                <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div>
                <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div>
                <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div>
                <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div>
                <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div>
                <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div> */}
                    {/* <h3>All Items</h3> */}
                {/* <div class="Display-Grid"> */}
                    {showItems()}
                    {/* </div> */}

                
            </div>
           
        </>
    );
}

export default StoreFrontDesk;