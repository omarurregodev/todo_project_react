import React, {useState} from 'react';
import ItemCount from './ItemCount';
import Mug_doreamon from '../../src/assets/img/doraemon_mug.jpg';
import Swal from '../../node_modules/sweetalert2/dist/sweetalert2.all.js';



const ItemListContainer = ({titulo}) => {


    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h3>{titulo}</h3>
                </div>
                <ItemCount />
            </div>       
        </>
    )
}

export default ItemListContainer;

