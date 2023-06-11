import React from "react";
import Item from "./Item";


//funcionalidad para recorrer los items, se puede agregar mas propiedades al item
function List(props){
  return(
      // List -> Response? -> crear un style list?
      
      <div className="List">
        {
          props.items.map(item =>
             <Item 
                key={item.id}
                id={item.id}
                title ={item.title}
                image={item.image}
                memory={item.memory}
                price= {item.price}
                color= {item.color} />
            )
        }

      </div>

  );
}


export default List;