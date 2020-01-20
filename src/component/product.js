import React, { Component } from 'react';
import Filters from './filters';
import ProductTable from './productTable';
import ProductForm from './productForm';

var PRODUCTS = {
    '1': {id: 1, category: 'Musical Instruments', Price: '$459.99', stocked: true, name: 'Clarinet'},
    '2': {id: 1, category: 'Musical Instruments', Price: '$5,000', stocked: true, name: 'Harpsicord'},
    '3': {id: 1, category: 'Musical Instruments', Price: '$11,000', stocked: false, name: 'Fortepiano'},
    '4': {id: 1, category: 'Furniture', Price: '$799', stocked: true, name: 'Chaise Lounge'},
    '5': {id: 1, category: 'Furniture', Price: '$1,459', stocked: false, name: 'Dining Table'},
    '6': {id: 1, category: 'Furniture', Price: '$100', stocked: true, name: 'Bean Bag'}
    
};
class Products extends Component {
    render() {
        return (
            <div>
                <Filters />
                <ProductTable />
                <ProductForm />
            </div>
        );
    }
}

export default Products;