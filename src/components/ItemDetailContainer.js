import React from "react";


const ItemDetail = ({name_mug, Mug_doreamon, descripcion, price}) => {
    return(
        <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{name_mug}<i className="material-icons right">close</i></span>
            <img src={Mug_doreamon} className="activator circle responsive-img" alt="mug" />
            <p>{descripcion}</p>
            <p className='' style={styles.p_desc_item}>$ {price}</p>
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