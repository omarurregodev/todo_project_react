import React, { useEffect, useState } from 'react';
import productos from '../../Data/data.json';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";



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
    const {categoryName} = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getData.then((data) => {
            const getCategory = data.filter(x => x.category === categoryName)
            categoryName ? setProducts(getCategory) : setProducts(data) 
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setLoading(false);
        })
    }, [categoryName]);




    return (
        <div className='container'>
            <div className='row'>
                <h3>Lista de productos</h3>
            </div>
            {loading 
            ? <div class="progress container">
                <div class="indeterminate"></div>
            </div>
            : <ItemList products={products} />}
        </div>
    )
}

export default ItemListContainer;

