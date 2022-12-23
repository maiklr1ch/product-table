
import React, { Component } from 'react';

class ProductHeader extends Component {

    handleNameSort = () => this.props.onSortingChange('name');
    handlePriceSort = () => this.props.onSortingChange('price');

    render() {
        let nameClass = '';
        let priceClass = '';
        if (this.props.sortingProp === 'name') nameClass = this.props.sortingType;
        else if (this.props.sortingProp === 'price') priceClass = this.props.sortingType;
        
        return (
            <tr>
                <th className={nameClass} onClick={this.handleNameSort}>Name</th>
                <th className={priceClass} onClick={this.handlePriceSort}>Price</th>
            </tr>
        );
    }
}

export default ProductHeader;
