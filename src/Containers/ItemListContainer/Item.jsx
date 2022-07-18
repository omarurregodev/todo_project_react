import React from "react";
import ItemDetail from '../ItemDetailsContainer/ItemDetailContainer';


const Item = ({product}) => {
    return (
        <>
            <div className="card cyan lighten-5">
                <div className="card-image">
                    <img src={product.url} className="activator itemImg" alt="mug" />
                    <button className="btn-floating btn-large halfway-fab waves-effect waves-light light-green"><i className="material-icons">add</i></button>
                </div>
                <div className="card-content">
                    <span className="card-title grey-text text-darken-4 cardTitle">{product.name}</span>
                    <p className='activator' style={styles.p_desc_item}>Descripción...</p>
                    <p className='' style={styles.p_desc_item}>$ {product.price}</p>
                    <div className='row' style={styles.row_add_container}>
                        <button className='btn-floating waves-effect waves-light deep-orange'><i className="material-icons">remove</i></button>
                        <span className='' style={styles.contador_number}></span>
                        <button className='btn-floating waves-effect waves-light light-bue'><i className="material-icons">add</i></button>
                    </div>
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
        paddingBottom: '1rem',
        cursor: 'pointer',
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