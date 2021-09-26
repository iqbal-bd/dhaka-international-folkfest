import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for (const singer of cart){
        total = total + singer.demand;
    }

    const element = <FontAwesomeIcon icon={faCrown}/>;
    return (
        <div className='cart'>
            <h3>SINGERS LIST</h3>
            <h5>Singer Selected: {props.cart.length}</h5>
            <p>Total: {total} Tk</p>
            <button className='btn-cart'>{element}comfirm</button>
            <ul>
                {
                    cart.map(singer=> <li key={singer.key}><span className='singer-name'>Singer Name:</span> {singer.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;