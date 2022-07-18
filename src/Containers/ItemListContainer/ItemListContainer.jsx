import React, { useEffect, useState, useParams} from 'react';
import ItemsArray from '../../Data/data';
import ItemList from './ItemList';
//import ItemCount from './ItemCount';



const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(true);

    //const { categoryId } = useParams();

    if (ItemsArray.length > 0) {
        setProducts(ItemsArray);
    }

    // useEffect(() => {
    //     const URL = categoryId
    //         //? ItemsArray.category
    //         ? `https://fakestoreapi.com/products/category/${categoryId}`
    //         : 'https://fakestoreapi.com/products'
    //     fetch(URL)
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    //         .catch(err => console.log(err))
    //         .finally(() => setLoaded(false))
    // }, [categoryId]);

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h3>{greeting}</h3>
                    <ItemList products={products} />}
                </div>
                {/* <ItemCount stock={stock} initialCount={initialCount}/> */}
            </div>       
        </>
    )
}

export default ItemListContainer;

