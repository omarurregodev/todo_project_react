import React, { useState, useContext } from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { cartContexto } from '../../Context/CartContext';




const ItemDetail = ({product}) => {

    const { addNewProduct } = useContext(cartContexto);

    const [cartState, setCartState] = useState(true);

    const ShowEndBtn = () => {
      setCartState(false);
    }

    const ResetAddBtn = () => {
      setCartState(true);
    }

    const OnAdd = (contador) => {
      addNewProduct({...product, quantity: contador});

    }
    
    return (
      <>
        <div className='col s12 m6 l6'>
          <img className='z-depth-4' style={styles.img} src={product.url} alt={product.title} />
        </div>
        <div className='col s12 m6 l6' style={styles.infoContainer}>
          <h5>{product.name}</h5>
          <p>{product.desc}</p>
          <p style={styles.countNumber}>${product.price}</p> 
          {cartState ? <ItemCount stock={product.stock} initial={0} OnAdd={OnAdd} ShowEndBtn={ShowEndBtn}/> : 
          <Link to={'/cart'}>
              <div className='row' style={styles.row_add_container}>
                  <button className='waves-effect waves-light btn' onClick={ResetAddBtn}>Finalizar compra</button>
              </div>
          </Link>
          }   
        </div>
      </>
        
    );
}
const styles = {
    countNumber: {
      fontSize: '2rem',
      margin: '1rem 0rem',
    },
    infoContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    img: {
      width: "100%"
    },
    infoTextContainer: {
      display: "flex",
      flexDirection: "column",
    },
    infoText: {
      padding: "10px",
      marging: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around"
    }
  };

export default ItemDetail;
