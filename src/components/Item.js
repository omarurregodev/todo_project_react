import React from "react";

const Item = ({descripcion, name_mug}) => {
    return (
        <>
            <span className="card-title grey-text text-darken-4">{name_mug}<i className="material-icons right">close</i></span>
            <p>{descripcion}</p>
        </>
    )
}

export default Item;