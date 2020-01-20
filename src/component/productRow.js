import React, { Component } from 'react';

class ProductRow extends Component {
    render() {
        return (
            <tr>
                <td><span className={this.props.product.stocked ? '' : 'ProductRow-out-of-stock'}></span>
                    {this.props.product.name}
                </td>
                <td>
                    {this.props.product.price}
                </td>
                <td>
                    <button>x</button>
                </td>
            </tr>
        );
    }
}

export default ProductRow;