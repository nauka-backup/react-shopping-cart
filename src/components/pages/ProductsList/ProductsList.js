// feature 1
import React from 'react';
import './ProductsList.css';
import data from '../../../data.json';
import Products from '../../Products/Products';

class ProductsList extends React.Component {
    constructor() {
        super();
        this.state = {
            products: data.products,
            size: '',
            sort: '',
        };
    }
    render() {
        return (
            <div className="grid-container">
                <header className="grid-title">
                    <h1>browse the products</h1>
                </header>
                <aside className="filter-container">
                    <h2>filter things</h2>
                    <div>produkt 1</div>
                    <div>produkt 2</div>
                </aside>
                <main>
                    <div className="content">
                        <div className="main">
                            <Products products={this.state.products} />
                        </div>
                        <div className="sidebar">cart items</div>
                    </div>
                </main>
            </div>
        );
    }
}

export default ProductsList;
