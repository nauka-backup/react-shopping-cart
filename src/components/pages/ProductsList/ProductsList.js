import React from 'react';
import './ProductsList.css';
import Products from '../../Products/Products';
import Filter from '../../Filter/Filter';
import Cart from '../../Cart/Cart';
import store from '../../../store';
import { Provider } from 'react-redux';

class ProductsList extends React.Component {
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
                                <Products />
                            </div>
                            <div className="sidebar">
                                <Cart />
                            </div>
                        </div>
                    </main>
                </div>
            </Provider>
        );
    }
}

export default ProductsList;
