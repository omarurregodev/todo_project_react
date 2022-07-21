import React from 'react';
import Item from './Item';



const ItemList = ({products}) => {

    return (
        <div className="row">
        {products.map((data) => { 
            return (
                <div  key={data.id} className="col s12 m4 l4" >
                    <Item product={data} />
                </div>         
            )       
            })}
        </div>    
    )
}

export default ItemList;
