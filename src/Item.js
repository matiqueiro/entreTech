import React from "react";
import "./Item.css";


// propiedades de items/cells, incluye funcionalidad para nuevo componente (Desc)?
function Item(props){
  return(
    <div className="item">
      <div className="image"><img src={'img/' + props.image} width="100%" alt="imagen de celular iphone y mostrar color" /></div>
      <div className="title">{props.title + '' + props.memory }</div>
      {/* price tachar anterior y poner nuevo, incluir -10%? */}
      <div className="price">{props.price}</div>
      <div className="color">{props.color}</div>

    </div>
  );
}

export default Item;