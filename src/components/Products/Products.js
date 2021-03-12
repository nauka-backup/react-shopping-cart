import React, { Component } from 'react';
import formatCurrency from '../util';
import './Products.css';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/productActions';
import { addToCart } from '../../actions/cartActions';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
        };
    }
    componentDidMount() {
        this.props.fetchProducts();
    }
    openModal = (product) => {
        this.setState({
            product,
        });
    };
    closeModal = () => {
        this.setState({ product: null });
    };

    render() {
        const { product } = this.state;

        return (
            <div>
                {!this.props.products ? (
                    <div>Loading ...</div>
                ) : (
                    <ul className="products">
                        {this.props.products.map((product) => (
                            <li key={product._id}>
                                <div className="product">
                                    <a
                                        href={'#' + product._id}
                                        onClick={() => this.openModal(product)}
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                        />
                                        <p>{product.title}</p>
                                    </a>
                                    <div className="product-price">
                                        <div>
                                            {formatCurrency(product.price)}
                                        </div>
                                        <button
                                            onClick={() =>
                                                this.props.addToCart(product)
                                            }
                                            className="button primary"
                                        >
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                {product && (
                    <Modal
                        className="modal"
                        isOpen={true}
                        onRequestClose={this.closeModal}
                    >
                        <Zoom>
                            <button
                                className="close-modal button"
                                onClick={this.closeModal}
                            >
                                x
                            </button>
                            <div className="product-details">
                                <img src={product.image} alt={product.title} />
                                <div className="product-details-description">
                                    <p>
                                        <strong> {product.title}</strong>
                                    </p>
                                    <p>{product.description}</p>
                                    <div className="product-price">
                                        <div>
                                            {formatCurrency(product.price)}
                                        </div>
                                        <button
                                            className="button primary"
                                            onClick={() => {
                                                this.props.addToCart(product);
                                                this.closeModal();
                                            }}
                                        >
                                            add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </Modal>
                )}
            </div>
        );
    }
}
// first paramenter is fnction that accept state and return an object that define which part of the state we will be use(which part of redux we will use). 2 parameter of connect is list of actions. connect fn itself return another function - it accept parameter and it is a name of component we will connect.
export default connect(
    (state) => ({ products: state.products.filteredItems }),
    {
        fetchProducts,
        addToCart,
    }
)(Products);
