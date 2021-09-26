import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import './Singer.css'

//body content part

const Singer = (props) => {
    const {name, img, born, genre, recordLabels, demand} = props.singer;
    const element = <FontAwesomeIcon icon={faThumbsUp} />;
    return (
        <div className='singer'>
            <img className='image' src ={img} alt=''/>
            <div>
                <h4 className='singer-name'><span className='title'>Name:</span> {name}</h4>
                <p><small><span className='title'>Born:</span> {born}</small></p>
                <p><span className='title'>Genre:</span> {genre}</p>
                <p><small><span className='title'>Record Labels:</span>  {recordLabels}</small></p>
                <p><span className='title'>Demand:</span> {demand} Tk</p>
                <button 
                    onClick = {() => props.handleAddToCart(props.singer)}
                    className='btn-singer' >{element} add to list</button>
            </div>
        </div>
    );
};

export default Singer;