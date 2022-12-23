
import React, { Component } from 'react';
import { SortAlphaUp, SortAlphaDown, SortNumericUp, SortNumericDown } from 'react-bootstrap-icons';

class ProductHeader extends Component {

    handleNameSort = () => this.props.onSortingChange('name');
    handlePriceSort = () => this.props.onSortingChange('price');

    render() {
        let nameIcon = '';
        let priceIcon = '';
        if (this.props.sortingProp === 'name') {
            if(this.props.sortingType === 'asc') nameIcon = <SortAlphaUp className='sort-icon' />;
            else if(this.props.sortingType === 'desc') nameIcon = <SortAlphaDown className='sort-icon' />;
        }
        else if (this.props.sortingProp === 'price') {
            if(this.props.sortingType === 'asc') priceIcon = <SortNumericUp className='sort-icon' />;
            else if(this.props.sortingType === 'desc') priceIcon = <SortNumericDown className='sort-icon' />;
        }
        
        return (
            <tr>
                <th onClick={this.handleNameSort}>Name{nameIcon}</th>
                <th onClick={this.handlePriceSort}>Price{priceIcon}</th>
            </tr>
        );
    }
}

export default ProductHeader;
