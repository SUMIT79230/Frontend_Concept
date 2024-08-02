// Reducers are functions that take the current state and an action as arguments and return a new state.
// They must be pure, meaning they don't mutate the state or have side effects.

import { totalprice } from "./actions";

const initialState = {items : [] , total : 0};

function cartReducer(state = initialState, action)
{
    switch(action.type)
    {
        case 'ADD_TO_CART': 
            return {...state, items : [...state.items,action.item] ,total : state.total + action.item.price}; // new state
            // {...state} create shallow copy of current state object and ensure original state is not mutated and 
            // new state object is returned , -> Redux maintain immutability. 
        case 'REMOVE_FROM_CART':
            const itemToRemove = state.items.find(item => item.id === action.itemId);
            return {...state , items : state.items.filter(item => item.id !== action.itemId) , total : state.total - itemToRemove.price};
            // .filter method used to create new array (its item.id  not equal to given action itemId) and return it.
        default:
            return state;
    }
}


export default cartReducer;