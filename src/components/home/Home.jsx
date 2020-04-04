import React, { Component } from 'react';
import Product from './product/Product'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

export class Home extends Component {

    componentDidMount = () => {
        //const apiKey = 'AIzaSyBHopQw8LNC5ziryimOnH6OgaAWEKl03bk';
        this.props.onGetAllProducts();
    }

    checkIsProductInStore = product => {
        return this.props.storeProducts.some(storeProduct => storeProduct.id === product.id);
    }

    render() {
        let products = this.props.products.map(product => {
            let isInStore = this.checkIsProductInStore(product);
            return <Product key={product.id} product={product} inStore={isInStore} onAddToCart={this.props.onAddToCart} onRemoveFromCart={this.props.onRemoveFromCart} />
        });

        return (
            <React.Fragment>
                <h1>Home</h1>
                {products}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        storeProducts: state.storeProducts
    }
};

const mapActionsToProps = dispatch => {
    return {
        onGetAllProducts: () => dispatch(actionCreators.getAllProducts()),
        onAddToCart: item => dispatch(actionCreators.addToCart(item)),
        onRemoveFromCart: product => dispatch(actionCreators.removeFromCart(product))
    }
};

export default connect(mapStateToProps, mapActionsToProps)(Home);