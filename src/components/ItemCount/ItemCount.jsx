import React, {useState} from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import { Link } from 'react-router-dom';




const ItemCount = ({stock, initial}) => {

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
            <span className='' style={styles.contador_number}>{contador}</span>
            <button className='btn-floating btn-small waves-effect waves-light light-bue' onClick={addClickbtn}><i className="material-icons">add</i></button>        
        </div>
        <div className='row'>
            <Link to="/cart">
                <button className='waves-effect waves-light btn' onClick={AddToCart}>Finalizar compra</button>
            </Link>
        </div>

        {/* <ItemList Contador={contador} addClickbtn={addClickbtn} removeClickbtn={removeClickbtn} AddToCart={AddToCart}/> */}
            
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
