import React, { useEffect, useState } from 'react';
import './Shop.css';
import Toy from '../Toy/Toy';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [toys, setToys] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('toys.json')
            .then(res => res.json())
            .then(data => setToys(data))
    }, []);

    const handleAddToCart = (toy) => {
        if (cart.length < 4) { // Check if the cart has less than 4 items
            const newCart = [...cart, toy];
            setCart(newCart);
        } else {
            // Handle the case when the cart is full (e.g., show a message)
            alert('Cart is full! You cannot add more items.');
        }
    }

    return (
        <div className='shop-container'>
            <div className='toy-container'>
                {
                    toys.map(toy => <Toy
                        toy={toy}
                        key={toy.id}
                        handleAddToCart={handleAddToCart}
                    ></Toy>)
                }
            </div>
            <div className='toy-cart'>
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;