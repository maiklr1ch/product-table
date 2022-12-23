
import React, { Component } from 'react';
import './style.css';
import SearchApp from './SearchApp.jsx';
import AddingApp from './AddingApp.jsx';
import EditingApp from './EditingApp.jsx';
import ProductTable from './ProductTable.jsx';
import { ArrowRepeat, PlusCircleFill, DatabaseFill } from 'react-bootstrap-icons';

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Array.from(props.data),
            addingModalActive: false,
            addingName: '',
            addingPrice: '',
            addingCategory: '',
            addingStocked: false,
            editingModalActive: false,
            editingID: null,
            editingName: '',
            editingPrice: '',
            editingCategory: '',
            editingStocked: null,
            searchText: '',
            isStockedOnly: false
        };
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleAddRow = this.handleAddRow.bind(this);
        this.handleEditRow = this.handleEditRow.bind(this);
        this.handleDeleteRow = this.handleDeleteRow.bind(this);
        this.handleAddButton = this.handleAddButton.bind(this);
        this.handleEditButton = this.handleEditButton.bind(this);
        this.handleResetButton = this.handleResetButton.bind(this);
    }

    handleValueChange(prop, value) {
        this.setState({ [prop]: value });
    }

    handleAddRow() {
        const newData = [
            ...Array.from(this.state.data),
            {
                id: crypto.randomUUID(),
                category: this.state.addingCategory,
                name: this.state.addingName,
                price: +this.state.addingPrice,
                stocked: this.state.addingStocked,
            }
        ];
        this.setState({
            data: newData,
            addingModalActive: false,
            addingName: '',
            addingPrice: '',
            addingCategory: '',
            addingStocked: false
        });
    }

    handleEditRow() {
        const newData = Array.from(this.state.data);
        for (let i = 0; i < newData.length; i++) {
            if (newData[i].id === this.state.editingID) {
                newData[i].name = this.state.editingName;
                newData[i].category = this.state.editingCategory;
                newData[i].price = +this.state.editingPrice;
                newData[i].stocked = this.state.editingStocked;
                break;
            }
        }
        this.setState({
            data: newData,
            editingID: null,
            editingModalActive: false,
            editingName: '',
            editingPrice: '',
            editingCategory: '',
            editingStocked: null
        });
    }

    handleDeleteRow(id) {
        const newData = Array.from(this.state.data);
        for (let i = 0; i < newData.length; i++) {
            if (newData[i].id === id) {
                newData.splice(i, 1);
            }
        }
        this.setState({ data: newData });
    }

    handleAddButton() {
        this.setState({ addingModalActive: true });
    }

    handleEditButton(id) {
        for (let product of this.state.data) {
            if (product.id === id) {
                this.setState({
                    editingModalActive: true,
                    editingID: id,
                    editingName: product.name,
                    editingPrice: product.price,
                    editingCategory: product.category,
                    editingStocked: product.stocked
                });
                break;
            }
        }

    }

    handleResetButton() {
        this.setState({ data: Array.from(this.props.data) });
    }

    render() {
        const addingModal = this.state.addingModalActive &&
            <AddingApp
                addingName={this.state.addingName}
                addingPrice={this.state.addingPrice}
                addingCategory={this.state.addingCategory}
                addingStocked={this.state.addingStocked}
                onValueChange={this.handleValueChange}
                onAddRow={this.handleAddRow}
                onCloseModal={() => this.handleValueChange('addingModalActive', false)}
            />;
        const editingModal = this.state.editingModalActive &&
            <EditingApp
                editingID={this.state.editingID}
                editingName={this.state.editingName}
                editingPrice={this.state.editingPrice}
                editingCategory={this.state.editingCategory}
                editingStocked={this.state.editingStocked}
                onValueChange={this.handleValueChange}
                onEditRow={this.handleEditRow}
                onCloseModal={() => this.handleValueChange('editingModalActive', false)}
            />;
        return (
            <div className='main-app'>
                <div>
                    <h1>Product Table<DatabaseFill /></h1>
                    <button onClick={this.handleAddButton}>
                        Add product
                        <PlusCircleFill />
                    </button>
                    <button onClick={this.handleResetButton}>
                        Reset data
                        <ArrowRepeat />
                    </button>
                    <SearchApp
                        searchText={this.state.searchText}
                        isStockedOnly={this.state.isStockedOnly}
                        onStateChange={this.handleValueChange}
                    />
                </div>
                <ProductTable
                    data={this.state.data}
                    searchText={this.state.searchText}
                    isStockedOnly={this.state.isStockedOnly}
                    onEditRow={this.handleEditButton}
                    onDeleteRow={this.handleDeleteRow}
                />
                {addingModal}
                {editingModal}
            </div>
        );
    }
}

export default FilterableProductTable;
