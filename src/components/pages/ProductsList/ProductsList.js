// feature 1
import React from 'react';
import './ProductsList.css';
import data from '../../../data.json';
import Products from '../../Products/Products';
import Filter from '../../Filter/Filter';

class ProductsList extends React.Component {
    constructor() {
        super();
        this.state = {
            products: data.products,
            producer: '',
            sort: '',
        };
    }

    sortProducts = (event) => {
        console.log(event.target.value);
        const sort = event.target.value;
        this.setState((state) => ({
            sort: sort,
            products: this.state.products
                .slice()
                .sort((a, b) =>
                    sort === 'lowest'
                        ? a.price > b.price
                            ? 1
                            : -1
                        : sort === 'highest'
                        ? a.price < b.price
                            ? 1
                            : -1
                        : a._id < b._id
                        ? 1
                        : -1
                ),
        }));
    };
    filterProducts = (event) => {
        console.log(event.target.value);
        if (event.target.value === '') {
            this.setState({
                producer: event.target.value,
                product: data.products,
            });
        } else {
            this.setState({
                producer: event.target.value,
                products: data.products.filter(
                    (product) =>
                        product.producer.indexOf(event.target.value) >= 0
                ),
            });
        }
    };

    render() {
        return (
            <div className="grid-container">
                <header className="grid-title">
                    <h1>browse the products</h1>
                </header>
                <aside className="filter-container">
                    <h2>Match your createria</h2>
                    <Filter
                        count={this.state.products.length}
                        producer={this.state.producer}
                        sort={this.state.sort}
                        filterProducts={this.filterProducts}
                        sortProducts={this.sortProducts}
                    />
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
