
import React, { Component } from 'react';

class ProductRow extends Component {
    render() {
        const data = this.props.product;
        return (
            <tr className={!data.stocked ? 'not-stocked' : ''}>
                <td>{data.name}</td>
                <td>{data.price}$</td>
            </tr>
        );
    }
}

export default ProductRow;
