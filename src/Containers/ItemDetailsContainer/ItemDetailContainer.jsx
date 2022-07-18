import React, { useEffect, useState, useParams} from 'react';
import ItemDetail from "./ItemDetail";
import ItemsArray from '../../Data/data';


export const ItemDetailsContainer = () => {

    const [product, setProduct] = useState([]);

    setInterval(() => {
        setProduct(ItemsArray);
    }, 2000);


    return(
        <>
            <ItemDetail product={product} />
        </>
    )
}

export default ItemDetailsContainer;

const styles = {
    p_desc_item: {
        paddingBottom: '1rem',
        cursor: 'pointer',
    },
}