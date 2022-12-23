
import React, { Component } from 'react';
import ProductHeader from './ProductHeader.jsx';
import ProductCategoryRow from './ProductCategoryRow.jsx';
import ProductRow from './ProductRow.jsx';


class ProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = { sortingProp: 'name', sortingType: 'default' };
        this.handleChangeSorting = this.handleChangeSorting.bind(this);
    }

    handleChangeSorting(prop) {
        let newType = 'asc';
        if(prop === this.state.sortingProp) {
            if(this.state.sortingType === 'default') newType = 'asc';
            else if(this.state.sortingType === 'asc') newType = 'desc';
            else newType = 'default';
        }
        
        this.setState({
            sortingProp: prop,
            sortingType: newType
        });
    }

    filterProduct(product) {
        if (product.name.toLowerCase().indexOf(this.props.searchText) === -1) return false;
        if (this.props.isStockedOnly && !product.stocked) return false;
        return true;
    }

    render() {
        const products = this.props.data.filter(product => this.filterProduct(product));
        if(this.state.sortingType === 'asc') products.sort((p1, p2) => p1[this.state.sortingProp] < p2[this.state.sortingProp] ? 1 : -1);
        if(this.state.sortingType === 'desc') products.sort((p1, p2) => p1[this.state.sortingProp] > p2[this.state.sortingProp] ? 1 : -1);
        products.sort((p1, p2) => p1.category > p2.category ? 1 : -1);
        let rows = [];
        let categories = [];
        products.forEach(product => {
            if (!categories.includes(product.category)) {
                categories = [...categories, product.category];
                rows = [...rows, <ProductCategoryRow category={product.category} key={product.category} />];
            }
            rows = [...rows, <ProductRow key={product.name} product={product} />];
        });

        return (
            <table>
                <thead>
                    <ProductHeader
                        sortingProp={this.state.sortingProp}
                        sortingType={this.state.sortingType}
                        onSortingChange={this.handleChangeSorting}
                    />
                </thead>
                <tbody>
                    {rows.length ? rows :
                        <tr>
                            <th colSpan={2}>NO MATCHES</th>
                        </tr>
                    }
                </tbody>
            </table>
        );
    }
}

export default ProductTable;
