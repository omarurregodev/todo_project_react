import React, {useState} from 'react';
import Mug_doreamon from '../../src/assets/img/doraemon_mug.jpg';
import Swal from '../../node_modules/sweetalert2/dist/sweetalert2.all.js';



const ItemCount = ({stock}) => {

    const [contador, setContador] = useState(1);

    const addClickbtn = () => {
        if (contador < stock) {
            setContador(contador + 1);
        } else {
            setContador(contador);
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'No se cuenta con mas inventario de este producto.',
                showConfirmButton: false,
                timer: 1500
            })
        }
        
    }

    const removeClickbtn = () => {
        if (contador === 0) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'No puedes agregar menos de 1 producto.',
                showConfirmButton: false,
                timer: 1500
            })
            setContador(contador);
        } else {
            setContador(contador - 1);    
        }    
    }

    const AddToCart = () => {
        if (contador > 0) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se han agregado los productos al carrito.',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: 'No hay productos para agregar.',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    return (
        <>
            <div className="row">
                <div className="col s12 m4 l4">
                <div className="card cyan lighten-5">
                    <div className="card-image">
                        <img src={Mug_doreamon} className="activator circle responsive-img" alt="mug_1" />
                        <button className="btn-floating btn-large halfway-fab waves-effect waves-light light-green" onClick={AddToCart}><i className="material-icons">add</i></button>
                    </div>
                    <div className="card-content">
                        <span className="card-title  grey-text text-darken-4">Mug de Doraemon</span>
                        <p className='activator' style={styles.p_desc_item}>Tazón para cafe con la cara de Doraemon el Gato Cósmico...</p>
                        <div className='row' style={styles.row_add_container}>
                            <button className='btn-floating waves-effect waves-light deep-orange' onClick={removeClickbtn}><i className="material-icons">remove</i></button>
                            <span className='' style={styles.contador_number}>{contador}</span>
                            <button className='btn-floating waves-effect waves-light light-bue' onClick={addClickbtn}><i className="material-icons">add</i></button>
                        </div>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Mug de Doraemon<i className="material-icons right">close</i></span>
                        <p>Tazón para cafe con la cara de Doraemon el Gato Cósmico.</p>
                    </div>
                </div>
                </div>
            </div>    
        </>
    )
}

export default ItemCount;


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