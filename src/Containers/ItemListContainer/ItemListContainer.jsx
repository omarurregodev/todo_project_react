import React, { useEffect, useState } from 'react';
import productos from '../../Data/data.json';
import ItemList from './ItemList';



const getData = new Promise((resolve, reject) => {
    let afterPromises = true;

    setTimeout(() => {
       if (afterPromises) {
        resolve(productos)
       } else {
        reject('Fallo en Get Data');
       }
    }, 2000);
});


const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getData.then((data) => {
            setProducts(data)
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setLoading(false);
        })
    }, [products]);




    return (
        <div>
      

        {loading ? <span>loading...</span> : <ItemList products={products} />}
    </div>
        // <>
        //     <div className='container'>
        //         <div className='row'>
        //             <h3>{greeting}</h3>
        //             <ItemList products={products} />
        //         </div>
        //         {/* <ItemCount stock={stock} initialCount={initialCount}/> */}
        //     </div>       
        // </>
    )
}

export default ItemListContainer;

