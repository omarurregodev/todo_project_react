import React, { useEffect, useState } from 'react';
// import productos from '../../Data/data.json';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { db } from '../../firebase/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';


const ItemListContainer = ({greeting}) => {
    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {  
        const queryCategory = categoryName
        ? query(collection(db, 'items'), where('category', '==', `${categoryName}`))
        :collection(db, 'items');

        getDocs(queryCategory).then(result => {
            const productList = result.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            setProducts(productList);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setLoading(false);
        });

    }, [categoryName]);




    return (
        <div className='container'>
            <div className='row'>
                <h3>Lista de productos</h3>
            </div>
            {loading 
            ?   <div className="progress container">
                    <div className="indeterminate"></div>
                </div>         
            : <ItemList products={products} />}
        </div>
    )
}

export default ItemListContainer;

