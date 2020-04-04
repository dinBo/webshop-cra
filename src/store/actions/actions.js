import axios from 'axios';

export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
//export const GET_PRODUCTS_HOME = 'GET_PRODUCTS_HOME';

export const getProducts = products => {
    return {
        type: GET_ALL_PRODUCTS,
        products: products
    }
}

export const getAllProducts = () => {
    return async dispatch => {
        let res = await axios.get('https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub');
        let products = res.data.items.map(product => {
            return {
                id: product.id,
                title: product.volumeInfo.title,
                imageURL: product.volumeInfo.imageLinks.thumbnail,
                authors: product.volumeInfo.authors
            }
        });
        dispatch(getProducts(products));
    }
};

export const addToCart = item => {
    return {
        type: ADD_TO_CART,
        product: item
    };
};

export const removeFromCart = product => {
    return {
        type: REMOVE_FROM_CART,
        product: product
    };
};

