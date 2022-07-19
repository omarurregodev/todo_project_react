import React from 'react';
import Item from './Item';



const ItemList = ({products}) => {

    return (
        <div className="row">
        {products.map((data) => { 
            return (
                <div className="col s12 m4 l4" >
                    {/* {console.log("map" + data.id)} */}
                    <Item key={data.id} product={data} />
                </div>         
            )       
            })}
        </div>    
    )
}

export default ItemList;
