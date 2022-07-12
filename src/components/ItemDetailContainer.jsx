import React from "react";


const ItemDetail = ({data, Mug_doreamon}) => {
    return(
        <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{data.name_mug}<i className="material-icons right">close</i></span>
            <img src={Mug_doreamon} className="activator circle responsive-img" alt="mug" />
            <p>{data.descripcion}</p>
            <p className='' style={styles.p_desc_item}>$ {data.price}</p>
        </div>
    )
}

export default ItemDetail;

const styles = {
    p_desc_item: {
        paddingBottom: '1rem',
        cursor: 'pointer',
    },
}