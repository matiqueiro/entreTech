import React from "react";
import './Wapp.css';

function Wapp(){
  return(
    <div>
      {/* se puede agregar icon de insta */}
      <a href="https://api.whatsapp.com/send?phone=numeronuevo" target="_blank">
      <img src='img/wapp.webp' className="wapp"/>
      
      </a>
    </div>
  );
}

export default Wapp;