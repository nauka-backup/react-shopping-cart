import { connect } from 'react-redux';
import React, { Component } from 'react';
import formatCurrency from '../util';
import './Cart.css';
import { removeFromCart } from '../../actions/cartActions';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', address: '', showCheckout: false };
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems,
        };
        this.props.createOrder(order);
    };

    render() {
        const { cartItems } = this.props;

        return (
            <div>
                {cartItems.length === 0 ? (
                    <div className="cart cart-header">Cart is empty</div>
                ) : (
                    <div className="cart cart-header">
                        you have {cartItems.length} in the cart
                    </div>
                )}
                <div>
                    <div className="cart">
                        <ul className="cart-items">
                            {cartItems.map((item) => (
                                <li key={item._id}>
                                    <div>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                        <div>
                                            {formatCurrency(item.price)} x
                                            {item.count}
                                            <button
                                                className="button"
                                                onClick={() =>
                                                    this.props.removeFromCart(
                                                        item
                                                    )
                                                }
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {cartItems.length !== 0 && (
                        <div>
                            <div className="cart">
                                <div className="total">
                                    Total:{' '}
                                    {formatCurrency(
                                        cartItems.reduce(
                                            (a, c) => a + c.price * c.count,
                                            0
                                        )
                                    )}
                                </div>
                                <button
                                    onClick={() => {
                                        this.setState({ showCheckout: true });
                                    }}
                                    className="button primary"
                                >
                                    Buy
                                </button>
                            </div>
                            {this.state.showCheckout && (
                                <div className="cart">
                                    <form onSubmit={this.createOrder}>
                                        <ul className="form-container">
                                            <li>
                                                <label>email</label>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    required
                                                    onChange={this.handleInput}
                                                />
                                            </li>
                                            <li>
                                                <label>name</label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    required
                                                    onChange={this.handleInput}
                                                />
                                            </li>
                                            <li>
                                                <label>address</label>
                                                <input
                                                    name="address"
                                                    type="text"
                                                    required
                                                    onChange={this.handleInput}
                                                />
                                            </li>
                                            {/* <li> */}
                                            <button
                                                className="button primary"
                                                type="submit"
                                            >
                                                checkout
                                            </button>
                                            {/* </li> */}
                                        </ul>
                                    </form>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        cartItems: state.cart.cartItems,
    }),
    { removeFromCart }
)(Cart);
