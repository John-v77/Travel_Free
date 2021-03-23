import React from 'react';


function Search(props) {

    // console.log(props.MyItemsZZZZ)

    const showItems = () => {
        return(
            props.MyItemsZZZZ.map(eachElement => {

                return(
                   <div className="search-item">
                       <img src={eachElement.image_url} alt="product picture"  style={{width:'15vw', height:'15vw', borderRadius:'6px'}}/>
                       <div> {eachElement.item}</div>
                       <div> ${eachElement.price}</div>
                       <div> {eachElement.description}</div>
                   </div>
                )
               })
            
        )
    }

    return (
        <div className="All-items-display">
            {showItems()}
        </div>
    );
}

export default Search;