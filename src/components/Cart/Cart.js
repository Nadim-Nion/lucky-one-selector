import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart, handleChooseAgain } = props;
    console.log(props);

    const chooseRandomItem = () => {
        if (cart.length === 0) {
            alert('Your cart is empty');
            return;
        }
        const randomIndex = Math.floor(Math.random() * cart.length);
        const selectedItem = cart[randomIndex];
        alert(`You selected: ${selectedItem.name}`);
    }
    return (
        <div className='cart'>
            <h3>Selected Toys</h3>
            {
                cart.map(item => <p key={item.id}>{item.name}</p>)
            }
            <div className='btn-grp'>
                <button onClick={chooseRandomItem} className='btn-one'>
                    <p>Choose 1 for me</p>
                </button>
                <br />
                <button onClick={handleChooseAgain} className='btn-two'>
                    <p>Choose again</p>
                </button>
            </div>
        </div>
    );
};

export default Cart;