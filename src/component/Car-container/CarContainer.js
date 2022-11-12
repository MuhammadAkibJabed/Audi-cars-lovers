import React from 'react';
import './CarConatainer.css'

const CarContainer = (props) => {
    const{name,price,engine,horsepower,Acceleration,img}=props.car;
    console.log(props.car)
    return (
        <div>
           <div className='row'>
            <div className="column">
                <div className="single-car-container">
                <div className="car-card" >
      <div className="car-title" >
          <h1>{name}</h1>
       </div>
       <div className="car-img">
          <img className='img' src={img} alt="" />
       </div>
       <div className="car-price">
          <p>Starting at</p>
          <p>${price}</p>
       </div>
       <div className="power-acceleration-div">
          <div className="power">
              <p>Power</p>
              <p>{horsepower}<small className="unit" >HP</small></p>
          </div>
          <div className="acceleration">
              <p>0-60 mph in</p>
              <p>{Acceleration}<small className="unit">sec</small></p>
          </div>
       </div>
       <div className="car-engine-div">
          <p>Engine</p>
          <p>{engine}</p>
       </div>
       <div className="car-button">
          <button>ADD TO CART</button>
       </div>
       <div className="icon">
 
       </div>
  </div>
 


                </div>
            </div>

           </div>
        </div>
    );
};

export default CarContainer;