import React, { Component } from 'react';
import SortableColumnHeader from './sortableColumnHeader';

class ProductTable extends Component {
    render() {
        let rows

        return (
            <table>
                <thead>
                    <tr>
                        <SortableColumnHeader column= "name"/>
                        <SortableColumnHeader column= "price"/>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        );
    }
}

export default ProductTable;