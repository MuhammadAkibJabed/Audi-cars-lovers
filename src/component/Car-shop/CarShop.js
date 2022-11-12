import React, { useEffect, useState } from 'react';
import CarContainer from '../Car-container/CarContainer';
import './CarShop.css'
const CarShop = () => {
    const [cars,setCars]=useState([]);
    useEffect(()=>{
        fetch('./cars.json')
        .then(res=>res.json())
        .then(data=>setCars(data));
    }
    ,[])
    return (
        <div className='shop-container'>
            <div className="car-container">
            {
                cars.map(car=><CarContainer car={car}></CarContainer>)
            }
            </div>
            <div className="cart-container">
            <h1>This is cart container</h1>
            </div>
        </div>
    );
};

export default CarShop;