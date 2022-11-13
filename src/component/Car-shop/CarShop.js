import React, { useEffect, useState } from 'react';
import CarContainer from '../Car-container/CarContainer'
import Cart from '../Cart/Cart'
import './CarShop.css'
const CarShop = () => {
    const [cars,setCars]=useState([]);
    const[carts,setCarts]=useState([]);
    
    
    useEffect(()=>{
        fetch('./cars.json')
        .then(res=>res.json())
        .then(data=>setCars(data));
    }
    ,[])
   const handleAddToCart=car=>{
    const newCarts=[...carts,car];
    setCarts(newCarts);
    
   }
    return (
        <div className='shop-container'>
            <div className="car-container">
            {
                cars.map(car=><CarContainer 
                    key={car.id}
                    handleAddToCart={handleAddToCart}
                    car={car}
                   
                    ></CarContainer>)
            }
            </div>
            <div className="cart-container">
                <Cart carts={carts} 
                ></Cart>
            </div>
        </div>
    );
};

export default CarShop;