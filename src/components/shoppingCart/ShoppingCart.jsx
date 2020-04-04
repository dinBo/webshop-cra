import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

class ShoppingCart extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>Shopping Cart</h1>
                {this.props.storeProducts.map(product => {
                    return (
                        <div key={product.id}>
                            <h1>{product.title}</h1>
                            <img src={product.imageURL} />
                            {product.authors.map((author, index) => {
                                return <p key={index}>{author}</p>
                            })}
                            <button className="btn btn-warning btn-sm" onClick={() => this.props.onRemoveFromCart(product)}>Remove from cart</button>
                            <hr />
                        </div>
                    )
                })}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        storeProducts: state.storeProducts
    }
}

const mapActionsToProps = dispatch => {
    return {
        onRemoveFromCart: (product) => dispatch(actionCreators.removeFromCart(product))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(ShoppingCart);