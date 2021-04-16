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

    

    // console.log('Prams ***********', props.match.params)

    console.log('after', item)

    return (
        <div className="Single-item-details">
                <img src={item.image_url} style={{width:"28vw", height:'55vh'}}/>
                <div><h1>{item.item}</h1></div> 
                <div><h2>{item.price}</h2></div> 
                <div style={{width:"28vw"}}><p>{item.description}</p></div> 
                <div><button>buy</button></div>
        </div>
    );
}

export default ItemDetails;