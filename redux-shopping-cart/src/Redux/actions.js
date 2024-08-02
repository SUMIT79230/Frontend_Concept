// Actions are plain JavaScript objects that describe what happened. 
// They usually have a `type` property and sometimes other data.

export const addToCart = (item) => 
{
    return { type : 'ADD_TO_CART', item, };
}; 


export const removeFromCart = (itemId) =>
{
    return { type : 'REMOVE_FROM_CART', itemId, };
};

export const totalprice = (price) =>
{
    return { type : 'UPDATE_TOTAL_PRICE', price, };
};