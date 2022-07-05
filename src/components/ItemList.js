import React, {useState, useEffect} from 'react';
import Item from '../components/Item';


const itemsArray = [
    {id: 0,name: 'Mug de Doraemon',price: 20,stock:5, desc:'Tazón para cafe con la cara de Doraemon el Gato Cósmico...'},
    {id: 1,name: 'Mug de Goku',price: 20,stock:9, desc:'Tazón para cafe con la cara de Goku...'},
    {id: 2,name: 'Mug de Pikachu',price: 20,stock:3, desc:'Tazón para cafe con la cara del Pokémon Pikachu...'},
    {id: 3,name: 'Mug de Naruto',price: 20,stock:7, desc:'Tazón para cafe con la cara de Naruto...'},
    {id: 4,name: 'Mug de Sasuke',price: 20,stock:11, desc:'Tazón para cafe con la cara de Sasuke...'},
];

const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        res(itemsArray);
    }, 2000);
})

const ItemList = ({Mug_doreamon, Contador, AddToCart, removeClickbtn, addClickbtn}) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        promesa.then((data) => {
            setProductos(data);
        }).catch(() => {
            console.log("No llego nada");
        })
    })

    return (
        <>
        <div className="row">
            {productos.map((data) => {
                return(
                    <div className="col s12 m4 l4" key={data.id}>
                    <div className="card cyan lighten-5">
                        <div className="card-image">
                            <img src={Mug_doreamon} className="activator circle responsive-img" alt="mug_1" />
                            <button className="btn-floating btn-large halfway-fab waves-effect waves-light light-green" onClick={AddToCart}><i className="material-icons">add</i></button>
                        </div>
                        <div className="card-content">
                            <span className="card-title  grey-text text-darken-4">{data.name}</span>
                            <p className='activator' style={styles.p_desc_item}>{data.desc}</p>
                            <p className='' style={styles.p_desc_item}>$ {data.price}</p>
                            <div className='row' style={styles.row_add_container}>
                                <button className='btn-floating waves-effect waves-light deep-orange' onClick={removeClickbtn}><i className="material-icons">remove</i></button>
                                <span className='' style={styles.contador_number}>{Contador}</span>
                                <button className='btn-floating waves-effect waves-light light-bue' onClick={addClickbtn}><i className="material-icons">add</i></button>
                            </div>
                        </div>
                        <div class="card-action">
                            <p className=''>Stock disponible: {data.stock}</p>
                        </div>
                        <div className="card-reveal">
                            <Item name_mug={data.name} descripcion={data.desc}/>
                        </div>
                    </div>
                    </div>  
                )         
            })}
        </div>
        </>
    )
}

export default ItemList;

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