import {
    FETCH_PRODUCTS,
    FILTER_PRODUCTS_BY_PRODUCER,
    ORDER_PRODUCTS_BY_PRICE,
} from '../types';

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

export const filterProducts = (products, producer) => (dispatch) => {
    dispatch({
        type: FILTER_PRODUCTS_BY_PRODUCER,
        payload: {
            producer: producer,
            items:
                producer === ''
                    ? products
                    : products.filter((x) => x.producer.indexOf(producer) >= 0),
        },
    });
};

export const sortProducts = (filteredProducts, sort) => (dispatch) => {
    const sortedProducts = filteredProducts.slice();
    if (sort === 'latest') {
        sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
    } else {
        sortedProducts.sort((a, b) =>
            sort === 'lowest'
                ? a.price > b.price
                    ? 1
                    : -1
                : a.price > b.price
                ? -1
                : 1
        );
    }

    dispatch({
        type: ORDER_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            items: sortedProducts,
        },
    });
};
