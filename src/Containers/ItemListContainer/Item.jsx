import React from "react";
import { Link } from 'react-router-dom';


const Item = ({product}) => {
    return (
        <>
        <div className="card cyan lighten-5 center-align">
            <div className="card-image">
                <img src={product.url} className="activator itemImg" alt="mug" />
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4 cardTitle">{product.name}</span>
                <Link to={`/product/${product.id}`}>
                    <button className="waves-effect waves-light btn">Descripción</button>
                </Link>
                <p className='' style={styles.p_desc_item}>$ {product.price}</p>
            </div>
            <div className="card-action">
                <p className=''>Stock disponible: {product.stock}</p>
            </div>
        </div>      
        </>
    )
}

export default Item;


const styles = {
    cardTitle: {
        fontSize: '1.2rem',
    },
    p_desc_item: {
        paddingTop: '1rem',
    },
    row_add_container: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '1rem',
    },
    contador_number: {
        fontSize: '2rem',
        margin: '0rem 1.5rem',
    },
    itemImg: {
        Height: '2rem',
        width: 'auto',
    }
}