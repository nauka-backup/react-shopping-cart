import { connect } from 'react-redux';
import React, { Component } from 'react';
import './Filter.css';
import { filterProducts, sortProducts } from '../../actions/productActions';

class Filter extends Component {
    render() {
        return !this.props.filteredProducts ? (
            <div>Loading ...</div>
        ) : (
            <div className="filter">
                <div className="filter-result">
                    {this.props.filteredProducts.length} Products
                </div>
                <div className="filter-sort">
                    Order
                    <select
                        value={this.props.sort}
                        onChange={(e) =>
                            this.props.sortProducts(
                                this.props.filteredProducts,
                                e.target.value
                            )
                        }
                    >
                        <option value="latest">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="hightest">Highest</option>
                    </select>
                </div>
                <div className="filter-producer">
                    Filter
                    <select
                        value={this.props.producer}
                        onChange={(e) =>
                            this.props.filterProducts(
                                this.props.products,
                                e.target.value
                            )
                        }
                    >
                        <option value="">All</option>
                        <option value="Apple">Apple</option>
                        <option value="Samsung">Samsung</option>
                        <option value="LG">LG</option>
                        <option value="Huawei">Huawei</option>
                        <option value="Xiaomi">Xiaomi</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        producer: state.products.producer,
        sort: state.products.sort,
        products: state.products.items,
        filteredProducts: state.products.filteredItems,
    }),
    {
        filterProducts,
        sortProducts,
    }
)(Filter);
