import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const{carts}=props;
    let totalPrice=0;
    for(const car of carts){
        totalPrice=totalPrice+car.price;
    }
    return (
        <div className='cart'>
            <div className="cart-heading">
            <h3 >Your favourite cars list and cost</h3>
            </div>
            <h4>Car added: {carts.length}</h4>
            <h4>Car Cost: ${totalPrice}</h4>
            <p>
                 {
                     carts.map((car,id)=><h3 key={id} className="car-name-list"> {car.name} </h3> )
                 }
             </p>
        </div>
    );
};

export default Cart;