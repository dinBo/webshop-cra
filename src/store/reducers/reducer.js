import * as actionTypes from '../actions/actions';

let initialState = {
    products: [],
    storeProducts: []
};

const reducer = (state = initialState, action) => {
    console.log(actionTypes.GET_ALL_PRODUCTS);
    switch (action.type) {
        case actionTypes.GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
        case actionTypes.ADD_TO_CART:
            let allreadyInTheCart = state.storeProducts.some(storeProduct => storeProduct.id === action.product.id)
            if (!allreadyInTheCart) {
                let storeProductsCopy = state.storeProducts.slice();
                storeProductsCopy.push(action.product);
                return {
                    ...state,
                    storeProducts: storeProductsCopy
                }
            }
            return {
                ...state
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                storeProducts: state.storeProducts.filter(product => product.id !== action.product.id)
            }
        default:
            return state;
    }
};

export default reducer;