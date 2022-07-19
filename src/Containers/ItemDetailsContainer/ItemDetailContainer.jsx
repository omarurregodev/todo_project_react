import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import productos from '../../Data/data.json';
import ItemCount from '../../components/ItemCount/ItemCount';



const ItemDetailsContainer = () => {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const params = useParams();

    const productDetail = productos.filter((producto) => producto.id === parseInt(params.id));


    const getItem = new Promise((resolve, reject) => {
        let afterPromises = true;
        setTimeout(() => {
            if (afterPromises) {
                resolve(productDetail);
            } else {
                reject("Fallo en Get Detail");
            }
        }, 2000);
    });


    useEffect(() => {
        getItem.then((data) => {
            setProduct(data);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setLoading(false);
        })
    }, [params.id]);


    return(
        
        <div>
        <ItemCount
          stock={5} initial={1} onAdd={() => alert("Agregado")}
        />
        {loading ? <span>loading...</span> : 
          product.map((item) => {
            return <ItemDetail key={item.id} productDetail={item} />
          })         
        } 
      </div>
        // <>
        //     <ItemDetail product={product} />
        // </>
    )
}

export default ItemDetailsContainer;

const styles = {
    p_desc_item: {
        paddingBottom: '1rem',
        cursor: 'pointer',
    },
}