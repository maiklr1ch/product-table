
import React, { Component } from 'react';
import { XCircle, CheckCircleFill } from 'react-bootstrap-icons';

class EditingApp extends Component {

    handleName = event => this.props.onValueChange('editingName', event.target.value);
    handleCategory = event => this.props.onValueChange('editingCategory', event.target.value);
    handlePrice = event => this.props.onValueChange('editingPrice', event.target.value);
    handleStocked = event => this.props.onValueChange('editingStocked', event.target.checked);

    render() {
        return (
            <>
                <div className='modal'>
                    <div className="modal-header">
                        Edit product
                        <XCircle onClick={this.props.onCloseModal} />
                    </div>
                    <div className="modal-body">
                        <form onSubmit={this.props.onEditRow}>
                            <label htmlFor="id">ID:</label>
                            <input type="text" name='id' value={this.props.editingID} onChange={this.handleName} disabled />
                            <label htmlFor="name">Name:</label>
                            <input type="text" name='name' value={this.props.editingName} onChange={this.handleName} required />
                            <label htmlFor="category">Category:</label>
                            <input type="text" name='category' value={this.props.editingCategory} onChange={this.handleCategory} required />
                            <label htmlFor="price">Price:</label>
                            <input type="number" step="0.01" min="0" name='price' value={this.props.editingPrice} onChange={this.handlePrice} required />
                            <label htmlFor="stocked">Stocked:</label>
                            <input type="checkbox" name='stocked' checked={this.props.editingStocked} onChange={this.handleStocked} />
                            <button onClick={this.props.onCloseModal}>cancel</button>
                            <button type='submit'>save<CheckCircleFill /></button>
                        </form>
                    </div>
                </div>
                <div className="inactive-zone"></div>
            </>
        );
    }
}

export default EditingApp;
