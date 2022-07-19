import React from 'react';
import Item from './Item';



const ItemList = ({products}) => {

    return (
        <div className="container row">
        {products.map((data) => { 
            return (
                <div className="col s12 m4 l4" >
                    <Item key={data.id} product={data} />
                </div>         
            )       
            })}
        </div>    
    )
}

export default ItemList;
