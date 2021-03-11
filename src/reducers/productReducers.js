const {
    FETCH_PRODUCTS,
    FILTER_PRODUCTS_BY_PRODUCER,
    ORDER_PRODUCTS_BY_PRICE,
} = require('../types');

// when i get a new data from action, i update those data inside the redux store
export const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case FILTER_PRODUCTS_BY_PRODUCER:
            return {
                ...state,
                producer: action.payload.producer,
                filteredItems: action.payload.items,
            };
        case ORDER_PRODUCTS_BY_PRICE:
            return {
                ...state,
                sort: action.payload.sort,
                filteredItems: action.payload.items,
            };
        case FETCH_PRODUCTS:
            return { items: action.payload, filteredItems: action.payload };
        default:
            return state;
    }
};
