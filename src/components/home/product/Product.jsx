import React from 'react';

//class Product extends Component {
const Product = props => {
    //{ inStore: inStore, product: product, onRemoveFromCart: onRemoveFromCart, onAddToCart: onAddToCart } = this.props;

    let product = props.product;
    //let inStore = props.storeProducts.includes(product);
    //let inStore = props.storeProducts.some(storeProduct => storeProduct.id === product.id);
    let buttonClass = props.inStore ? "btn btn-sm btn-warning" : "btn btn-sm btn-primary";
    return (
        <div>
            {/**
             * product.volumeInfo.title
             * product.volumeInfo.imageLinks.thumbnail
             * product.volumeInfo.authors[]
             * product.volumeInfo.description
             * price - none
             * button
             */}
            <h1>{product.title}</h1>
            <img src={product.imageURL} />
            {product.authors.map((author, index) => {
                return <p key={index}>{author}</p>
            })}
            <p>{/*volumeInfo.description*/}</p>
            <button className={buttonClass}
                onClick={() => props.inStore ? props.onRemoveFromCart(product) : props.onAddToCart(product)}>
                {props.inStore ? "Remove from cart" : "Add to cart"}
            </button>
            <hr />
        </div>
    );
}

/*const mapStateToProps = state => {
    return {
        storeProducts: state.storeProducts
    }
}

const mapActionsToProps = dispatch => {
    return {
        onRemoveFromCart: product => dispatch(actionCreators.removeFromCart(product))
    }
}*/

//export default connect(mapStateToProps, mapActionsToProps)(Product);
export default Product;