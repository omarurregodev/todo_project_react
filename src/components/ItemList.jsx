import React, {useState, useEffect} from 'react';
import Item from '../components/Item';
import ItemsArray from '../../src/monk';

const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        res(ItemsArray);
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
                        <div className="col s12 m4 l4" >
                            <Item key={data.id} data={data} Contador={Contador} addClickbtn={addClickbtn} removeClickbtn={removeClickbtn} AddToCart={AddToCart}/>
                        </div>
                    )         
                })}
            </div>    
        </>
    )
}

export default ItemList;
