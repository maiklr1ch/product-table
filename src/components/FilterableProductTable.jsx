
import React, { Component } from 'react';
import './style.css';
import SearchApp from './SearchApp.jsx';
import ProductTable from './ProductTable.jsx';

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = { searchText: '', isStockedOnly: false };
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(prop, value) {
        this.setState({ [prop]: value });
    }

    render() {
        return (
            <div className='main-app'>
                <SearchApp
                    searchText={this.state.searchText}
                    isStockedOnly={this.state.isStockedOnly}
                    onStateChange={this.handleValueChange}
                />
                <ProductTable
                    data={this.props.data}
                    searchText={this.state.searchText}
                    isStockedOnly={this.state.isStockedOnly}
                />
            </div>
        );
    }
}

export default FilterableProductTable;
