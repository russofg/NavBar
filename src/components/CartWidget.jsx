import React from 'react';
import AddCart from "./img/AddCart.png"

function CarWidget() {
    return (
       <img
        src={AddCart}
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> 
    );
  }
  
  export default CarWidget;