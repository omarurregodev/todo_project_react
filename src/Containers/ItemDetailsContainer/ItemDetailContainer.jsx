import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import productos from '../../Data/data.json';
import { db } from '../../firebase/firebase';
import { getDoc, collection, doc } from 'firebase/firestore';




const ItemDetailsContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const productCollection = collection(db, 'items');
        const refItem = doc(productCollection, itemId);
        getDoc(refItem).then(result => {
            const productItem = {
                id: result.id,
                ...result.data(),
            }
            setProduct(productItem);
        }).catch((err) => {
            console.log(err);         
        }).finally(() => {
            setLoading(false)
        })
    }, [itemId]);


    return(
        
        <div className='container center-align'>
            <div className='row'>
                <h3 className=''>Detalle del Productos</h3>
            </div>
            <div className='row' style={styles.progressBarContainer}>
                {loading 
                ?   <div className="progress container">
                        <div className="indeterminate"></div>
                    </div>             
                : <ItemDetail product={product} />  
                }
            </div>           
        </div>
    )
}

export default ItemDetailsContainer;

const styles = {
    p_desc_item: {
        paddingBottom: '1rem',
        cursor: 'pointer',
    },
    progressBarContainer: {
        textAlign: 'center',
        alignItems: 'center',
        justifyItems: 'center'
    }
}