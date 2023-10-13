import React, { useEffect, useState } from 'react';
import './Shop.css';
import Toy from '../Toy/Toy';

const Shop = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('toys.json')
            .then(res => res.json())
            .then(data => setToys(data))
    }, []);

    return (
        <div className='shop-container'>
            <div className='toy-container'>
                {
                    toys.map(toy => <Toy
                        toy={toy}
                        key={toy.id}
                    ></Toy>)
                }
            </div>
            <div className='toy-cart'>
                <h3>Toy Cart</h3>

            </div>
        </div>
    );
};

export default Shop;