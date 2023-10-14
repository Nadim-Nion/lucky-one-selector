import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Toy.css';

const Toy = (props) => {
    // console.log(props);
    const { toy, handleAddToCart } = props;
    const { name, price, picture } = toy;

    return (
        <div className='toy'>
            <img src={picture} alt="" />
            <div className='toy-info'>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(toy)} className='btn-cart'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Toy;