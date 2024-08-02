import React from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { removeFromCart, totalprice } from '../Redux/actions';


const Cart = () => {
    const items = useSelector((state) => state.cart.items); // extract items array from redux store
    const total = useSelector((state) => state.cart.total);
    const dispatch  = useDispatch();

    const handleRemoveFromCart = (itemId) =>
    {
        dispatch(removeFromCart(itemId));
    };

    

    return (
        <div>
            <h2> CART </h2>
            {
                items.length === 0 ? (<p> Your Cart is Empty</p>) : ( <ul> 
                    {
                        items.map(item => 
                        <li key = {item.id}>
                            {item.name} - $ {item.price.toFixed(2)}
                            <button onClick={() => handleRemoveFromCart(item.id)}> Remove </button>
                        </li>
                        )
                    }
            
                    <h3> Total : ${total.toFixed(2)}</h3>
                    </ul>
                )
            }
        </div>
    );
};

export default Cart;