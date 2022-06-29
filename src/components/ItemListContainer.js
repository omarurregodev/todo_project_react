import React from 'react';
import ItemCount from './ItemCount';



const ItemListContainer = ({titulo, stock, initialCount}) => {

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h3>{titulo}</h3>
                </div>
                <ItemCount stock={stock} initialCount={initialCount}/>
            </div>       
        </>
    )
}

export default ItemListContainer;

