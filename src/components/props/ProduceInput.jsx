import React from 'react'
import { useState } from 'react';
const ProduceInput = ({ onQuantityChange }) => {
    const [quantity, setQuantity] = useState(1);
  
    const handleQuantityChange = (e) => {
      const newQuantity = parseInt(e.target.value, 10);
      setQuantity(newQuantity);
    };
  
    const handleAddToCart = () => {
      onQuantityChange(quantity);
    };
  
    return (
      < >
        <div className="input-quantity">
        <input
          type="number"
          value={quantity}
          min="1"
          max="10"
          onChange={handleQuantityChange}
        />
        </div>
    
        <div className='shopping-add'>
          <button onClick={handleAddToCart} className='shopping-add-btn'>
            SEPETE EKLE
          </button>
        </div>
      </>
    );
  };
  
  export default ProduceInput;