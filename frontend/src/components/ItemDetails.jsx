import React, {useEffect, useState} from 'react';
import actions from '../api'
import './ItemDetails.css';

function ItemDetails(props) {
    // console.log(props.match.params.id)
    const [item, setItem] = useState({})

    


    useEffect(() => {
        actions.searchItemById(props.match.params.id).then(res => {
            setItem(res.data)
            // console.log(res.data, '***', item)
        }).catch(console.error)
    }, [])


    const showItems = () =>{
        return item.map(each => {
            return(

            <div className="Single-item-details" key={each._id}>
                <img src={each.image_url} style={{width:"28vw", height:'55vh'}}/>
                <div><h1>Iphone</h1></div> 
                <div><h2>{each.price}</h2></div> 
                <div style={{width:"28vw"}}><p>{each.description}</p></div> 
                <div><button>buy</button></div>
            </div>
            )
        })}

    // console.log('Prams ***********', props.match.params)
    return (
        <>
        {/* {showItems()} */}
        </>
    );
}

export default ItemDetails;