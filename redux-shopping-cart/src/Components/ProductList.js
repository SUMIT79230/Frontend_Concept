import React from 'react';
import {useDispatch} from 'react-redux';
import { addToCart } from '../Redux/actions';
import { totalprice } from '../Redux/actions';
import { useSelector } from 'react-redux';

const ProductList = () =>
{
    const price = useDispatch((state => state.cart.price))
    const dispatch = useDispatch();

    const products = [{id : 1, name : 'Shirt', price : 300.00},{id : 2, name : 'Pant', price : 500.00},{id:3, name: 'Belt', price : 150.00}];

    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); // to dispatch addToCart action when product is added. 

    };

    return (
        <div>
            <h2> Product List </h2>
            <ul>
                {
                    products.map(product => ( // map takes each element of products and apply callback function.
                        <li key = {product.id}>
                            {product.name} - ${product.price.toFixed(2)} 
                            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        </li>

                    ))
                }
            </ul>
        </div>
    );
};

export default ProductList;