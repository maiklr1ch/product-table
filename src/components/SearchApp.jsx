
import React, { Component } from 'react';

class SearchApp extends Component {

    handleText = event => this.props.onStateChange('searchText', event.target.value);
    handleChecked = event => this.props.onStateChange('isStockedOnly', event.target.checked);

    render() {
        return (
            <div className='search-app'>
                <input type="text" placeholder='Search...' value={this.props.searchText} onChange={this.handleText} />
                <div>
                    <input type="checkbox" name="stocked" checked={this.props.isStockedOnly} onChange={this.handleChecked} />
                    <label htmlFor="stocked">View only stocked products</label>
                </div>
            </div>
        );
    }
}

export default SearchApp;
