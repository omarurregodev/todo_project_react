import React, {useState, useEffect} from 'react';
import Item from '../components/Item';
import Mug_doreamon from '../../src/assets/img/doraemon_mug.jpg'; // preguntar sobre las imagenes, como poderlas cargar desde un item del array



const itemsArray = [
    {id: 0,name: 'Mug de Doraemon',price: 20,stock:5, desc:'Tazón para cafe con la cara de Doraemon el Gato Cósmico...', category: 'tazon', url: '../../src/assets/img/doraemon_mug.jpg'},
    {id: 1,name: 'Mug de Goku',price: 20,stock:9, desc:'Tazón para cafe con la cara de Goku...', category: 'tazon', url: '../../src/assets/img/goku_mug.jpg'},
    {id: 2,name: 'Mug de Pikachu',price: 20,stock:3, desc:'Tazón para cafe con la cara del Pokémon Pikachu...', category: 'tazon', url: '../../src/assets/img/pikachu_mug.jpg'},
    {id: 3,name: 'Mug de Naruto',price: 20,stock:7, desc:'Tazón para cafe con la cara de Naruto...', category: 'tazon', url: '../../src/assets/img/naruto_mug.jpg'},
    {id: 4,name: 'Mug de Sasuke',price: 20,stock:11, desc:'Tazón para cafe con la cara de Sasuke...', category: 'tazon', url: '../../src/assets/img/sasuke_mug.jpg'},
];

const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        res(itemsArray);
    }, 2000);
})

const ItemList = ({Contador, AddToCart, removeClickbtn, addClickbtn}) => {

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
                        <Item data={data} Contador={Contador} addClickbtn={addClickbtn} removeClickbtn={removeClickbtn} AddToCart={AddToCart}/>
                    </div>  
                )         
            })}
        </div>
        </>
    )
}

export default ItemList;
