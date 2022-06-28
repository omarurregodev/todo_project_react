import React, {useState} from 'react';
import Mug_doreamon from '../../src/assets/img/doraemon_mug.jpg';
import Swal from '../../node_modules/sweetalert2/dist/sweetalert2.all.js';

const ItemListContainer = ({titulo}) => {

    const [contador, setContador] = useState(1);

    const addClickbtn = () => {
        setContador(contador + 1);
    }

    const removeClickbtn = () => {
        if (contador === 1) {
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

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h3>{titulo}</h3>
                </div>
                <div className='row'>
                    <div className='col s12 m6'>
                        <div className="card cyan lighten-5">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img src={Mug_doreamon} className="activator circle responsive-img" alt="mug_1" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Mug de Doraemon<i className="material-icons right">more_vert</i></span>
                                <div className='row' style={styles.row_add_container}>
                                    <button className='btn-floating waves-effect waves-light' onClick={removeClickbtn}><i className="material-icons">remove</i></button>
                                    <span className='' style={styles.contador_number}>{contador}</span>
                                    <button className='btn-floating waves-effect waves-light' onClick={addClickbtn}><i className="material-icons">add</i></button>
                                </div>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Mug de Doraemon<i className="material-icons right">close</i></span>
                                <p>Tazón para cafe con la cara de Doraemon el Gato Cósmico.</p>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>       
        </>
    )
}

export default ItemListContainer;

const styles = {

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