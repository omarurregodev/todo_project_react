import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../../components/ItemCount/ItemCount';



const ItemDetail = ({product}) => {
    return (
      <>
        <div className='col s12 m6 l6'>
          <img className='z-depth-4' style={styles.img} src={product.url} alt={product.title} />
        </div>
        <div className='col s12 m6 l6' style={styles.infoContainer}>
          <h5>{product.name}</h5>
          <p>{product.desc}</p>
          <p style={styles.countNumber}>${product.price}</p> 
          <ItemCount stock={product.stock} initial={0} />
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
