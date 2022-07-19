import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import productos from '../../Data/data.json';
import ItemCount from '../../components/ItemCount/ItemCount';



const ItemDetailsContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);



  

    const getItem = new Promise((res,rej) =>{
        setTimeout(() =>{
            res(productos);
        }, 2000);
        });


    useEffect(() => {
        getItem.then((data) => {
            const getNewData = data.find(product => product.id === itemId)
            setProduct(getNewData)
            setLoading(false);
        }).catch((err) => {
            console.log(err);

            
        })
    }, [itemId]);


    return(
        
        <div className='container center-align'>
            <div className='row'>
                <h3 className=''>Detalle del Productos</h3>
            </div>
            <div className='row'>
                {loading 
                ? <div class="progress container">
                    <div class="indeterminate"></div>
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
}