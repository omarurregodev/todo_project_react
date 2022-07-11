import React from "react";
import Mug_doreamon from '../../src/assets/img/doraemon_mug.jpg';
import ItemDetail from '../components/ItemDetailContainer';

const Item = ({data, Contador, AddToCart, removeClickbtn, addClickbtn}) => {
    return (
        <>
            <div className="card cyan lighten-5">
                <div className="card-image">
                    <img src={Mug_doreamon} className="activator circle responsive-img" alt="mug" />
                    <button className="btn-floating btn-large halfway-fab waves-effect waves-light light-green" onClick={AddToCart}><i className="material-icons">add</i></button>
                </div>
                <div className="card-content">
                    <span className="card-title  grey-text text-darken-4">{data.name}</span>
                    <p className='activator' style={styles.p_desc_item}>Descripción...</p>
                    <p className='' style={styles.p_desc_item}>$ {data.price}</p>
                    <div className='row' style={styles.row_add_container}>
                        <button className='btn-floating waves-effect waves-light deep-orange' onClick={removeClickbtn}><i className="material-icons">remove</i></button>
                        <span className='' style={styles.contador_number}>{Contador}</span>
                        <button className='btn-floating waves-effect waves-light light-bue' onClick={addClickbtn}><i className="material-icons">add</i></button>
                    </div>
                </div>
                <div className="card-action">
                    <p className=''>Stock disponible: {data.stock}</p>
                </div>
                <ItemDetail data={data} descripcion={data.desc} Mug_doreamon={Mug_doreamon} name_mug={data.name} price={data.price}/>
            </div>      
        </>
    )
}

export default Item;


const styles = {
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
    }
}