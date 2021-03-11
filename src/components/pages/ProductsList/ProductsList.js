// feature 1
import React from 'react';
import './ProductsList.css';
import Products from '../../Products/Products';
import Filter from '../../Filter/Filter';
import Cart from '../../Cart/Cart';
import store from '../../../store';
import { Provider } from 'react-redux';

class ProductsList extends React.Component {
    constructor() {
        super();
        this.state = {
            cartItems: localStorage.getItem('cartItems')
                ? JSON.parse(localStorage.getItem('cartItems'))
                : [],
        };
    }
    createOrder = (order) => {
        alert('need to save order for  ' + order.name);
    };
    removeFromCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        this.setState({
            cartItems: cartItems.filter((x) => x._id !== product._id),
        });
        localStorage.setItem(
            'cartItems',
            JSON.stringify(cartItems.filter((x) => x._id !== product._id))
        );
    };

    addToCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach((item) => {
            if (item._id === product._id) {
                item.count++;
                alreadyInCart = true;
            }
        });
        if (!alreadyInCart) {
            cartItems.push({ ...product, count: 1 });
        }
        this.setState({ cartItems });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };
    render() {
        return (
            <Provider store={store}>
                <div className="grid-container">
                    <header className="grid-title">
                        <h1>browse the products</h1>
                    </header>
                    <aside className="filter-container">
                        <h2>Match your createria</h2>
                        <Filter />
                    </aside>
                    <main>
                        <div className="content">
                            <div className="main">
                                <Products addToCart={this.addToCart} />
                            </div>
                            <div className="sidebar">
                                <Cart
                                    createOrder={this.createOrder}
                                    removeFromCart={this.removeFromCart}
                                    cartItems={this.state.cartItems}
                                />
                            </div>
                        </div>
                    </main>
                </div>
            </Provider>
        );
    }
}

export default ProductsList;
