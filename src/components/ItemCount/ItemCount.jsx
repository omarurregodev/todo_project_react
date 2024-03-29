import React, {useState} from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';





const ItemCount = ({stock, initial, OnAdd, ShowEndBtn, modificar, count}) => {

    const [contador, setContador] = useState(initial);


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
            OnAdd(contador);
            ShowEndBtn();
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
            <div className='row' style={styles.row_add_container}>
                <button className='btn-floating btn-small waves-effect waves-light deep-orange' onClick={removeClickbtn}><i className="material-icons">remove</i></button>
                {}
                <span className='' style={styles.contador_number}>{contador}</span>
                <button className='btn-floating btn-small waves-effect waves-light light-bue' onClick={addClickbtn}><i className="material-icons">add</i></button>
            </div>
            <div className='row' style={styles.row_add_container}>
                {modificar === 'Modificar cantidad' 
                ?<button className='waves-effect waves-light btn-small blue lighten-1' onClick={AddToCart}>{modificar}</button>
                : <button className='waves-effect waves-light btn' onClick={AddToCart}>Agregar al carrito</button>
                }
            </div>
        </>
    )
}

export default ItemCount;

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
        margin: '1rem 0rem',
        justifyContent: 'center'
    },
    contador_number: {
        fontSize: '1.5rem',
        margin: '0rem 1.5rem',
    },
    itemImg: {
        Height: '2rem',
        width: 'auto',
    }
}
