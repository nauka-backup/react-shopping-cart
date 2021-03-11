import { FETCH_PRODUCTS } from '../types';

export const fetchProducts = () => async (dispatch) => {
    //get data from server
    const res = await fetch('/api/products');
    const data = await res.json();

    // get res.data which contains the list of products and dispatch that as a action
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data,
    });
};
