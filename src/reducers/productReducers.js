const { FETCH_PRODUCTS } = require('../types');

// when i get a new data from action, i update those data inside the redux store
export const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { items: action.payload };
        default:
            return state;
    }
};
