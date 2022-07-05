import React, {useState} from 'react';
import Swal from '../../node_modules/sweetalert2/dist/sweetalert2.all.js';
import ItemList from '../components/ItemList';



const ItemCount = ({stock, initialCount}) => {

    const [contador, setContador] = useState(initialCount);

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

        <ItemList Contador={contador} addClickbtn={addClickbtn} removeClickbtn={removeClickbtn} AddToCart={AddToCart}/>
            
        </>
    )
}

export default ItemCount;


