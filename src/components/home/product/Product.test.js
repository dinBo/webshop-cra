import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Product from './Product';

configure({adapter: new Adapter()});

describe('<Product />', () => {
    let product = {
        "id": "s1gVAAAAYAAJ",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/s1gVAAAAYAAJ",
        "title": "Pride and Prejudice",
        "authors": [
            "Jane Austen"
        ],
        "thumbnail": "http://books.google.com/books/content?id=s1gVAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    };

    it('Should show \'Remove from cart\' if is in store', () => {
        let wrapper = shallow(<Product product={product} inStore={true} onRemoveFromCart={product=>{}}/>);
        //expect(wrapper.contains(<button className="btn btn-sm btn-warning" onClick={props.onRemoveFromCart(product)}>Add to cart</button>)).toEqual(true);
        //expect(wrapper.exists(<button className="btn btn-sm btn-warning" /*onClick={props.onRemoveFromCart(product)}*/>Add to cart</button>)).toEqual(true);
        expect(wrapper.exists('.btn-warning')).toEqual(true);

    })
})