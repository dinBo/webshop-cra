import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Home }   from './Home';
import Product from './product/Product';

configure({ adapter: new Adapter() });

describe('<Home />', () => {

    let stateMock = {
        products: [
            {
                "id": "s1gVAAAAYAAJ",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/s1gVAAAAYAAJ",
                "title": "Pride and Prejudice",
                "authors": [
                    "Jane Austen"
                ],
                "thumbnail": "http://books.google.com/books/content?id=s1gVAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            {
                "id": "kQ0mAAAAMAAJ",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/kQ0mAAAAMAAJ",
                "title": "Pride and Prejudice",
                "authors": [
                    "Jane Austen"
                ],
                "thumbnail": "http://books.google.com/books/content?id=kQ0mAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                "id": "5GbdTc9OJ78C",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/5GbdTc9OJ78C",
                "title": "Pride and Prejudice",
                "authors": [
                    "Jane Austen"
                ],
                "thumbnail": "http://books.google.com/books/content?id=5GbdTc9OJ78C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            }
        ],
        storeProducts: [
            {
                "id": "kQ0mAAAAMAAJ",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/kQ0mAAAAMAAJ",
                "title": "Pride and Prejudice",
                "authors": [
                    "Jane Austen"
                ],
                "thumbnail": "http://books.google.com/books/content?id=kQ0mAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            {
                "id": "5GbdTc9OJ78C",
                "selfLink": "https://www.googleapis.com/books/v1/volumes/5GbdTc9OJ78C",
                "title": "Pride and Prejudice",
                "authors": [
                    "Jane Austen"
                ],
                "thumbnail": "http://books.google.com/books/content?id=5GbdTc9OJ78C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            }
        ]
    };
    //let wrapper;

    /*beforeEach(() => {
        wrapper = shallow(<Home products={stateMock.products} storeProducts={stateMock.storeProducts} onGetAllProducts={()=>{}}/>);
    });*/

    it('Should render three <Product /> items', () => {
        //wrapper.setProps({products: stateMock.products, storeProducts: stateMock.storeProducts});
        let wrapper = shallow(<Home products={stateMock.products} storeProducts={stateMock.storeProducts} onGetAllProducts={()=>{}}/>);
        expect(wrapper.find(Product)).toHaveLength(3);
    })
})