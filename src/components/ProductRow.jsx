
import React, { Component } from 'react';
import { TrashFill, PencilFill } from 'react-bootstrap-icons';

class ProductRow extends Component {

    handleEditClick = () => this.props.onEditRow(this.props.product.id);
    handleDeleteClick = () => this.props.onDeleteRow(this.props.product.id);

    render() {
        const data = this.props.product;
        return (
            <tr className={!data.stocked ? 'not-stocked' : ''}>
                <td>{data.name}</td>
                <td>{data.price}$</td>
                <td className="row-action" onClick={this.handleEditClick}>
                    <PencilFill />
                </td>
                <td className="row-action" onClick={this.handleDeleteClick}>
                    <TrashFill />
                </td>
            </tr>
        );
    }
}

export default ProductRow;
