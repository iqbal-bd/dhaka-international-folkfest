import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Cart from '../Cart/Cart';
import Singer from '../Singer/Singer';
import './Selection.css';

// card part

const Selection = () => {
    const [singers, Setsingers] =useState([]);
    const [cart,setCart] = useState([]);
    useEffect(() =>{
        fetch('./singers.JSON')
        .then(res => res.json())
        .then(data => Setsingers(data));
    },[])

    const handleAddToCart = (singer) =>{
        const newCart = [...cart, singer];
        setCart(newCart);
    }
    return (
        <div className="selection-container">
            <div className="singer-container">
                {
                    singers.map(singer => <Singer 
                        key={singer.key}
                        singer ={singer}
                        handleAddToCart = {handleAddToCart}>
                        </Singer>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Selection;