
import React, { Component } from 'react';
import { XCircle, CheckCircleFill } from 'react-bootstrap-icons';

class AddingApp extends Component {

    handleName = event => this.props.onValueChange('addingName', event.target.value);
    handleCategory = event => this.props.onValueChange('addingCategory', event.target.value);
    handlePrice = event => this.props.onValueChange('addingPrice', event.target.value);
    handleStocked = event => this.props.onValueChange('addingStocked', event.target.checked);

    render() {
        return (
            <>
                <div className='modal'>
                    <div className="modal-header">
                        Add product
                        <XCircle onClick={this.props.onCloseModal} />
                    </div>
                    <div className="modal-body">
                        <form onSubmit={this.props.onAddRow}>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name='name' value={this.props.addingName} onChange={this.handleName} required />
                            <label htmlFor="category">Category:</label>
                            <input type="text" name='category' value={this.props.addingCategory} onChange={this.handleCategory} required />
                            <label htmlFor="price">Price:</label>
                            <input type="number" step="0.01" min="0" name='price' value={this.props.addingPrice} onChange={this.handlePrice} required />
                            <label htmlFor="stocked">Stocked:</label>
                            <input type="checkbox" name='stocked' checked={this.props.addingStocked} onChange={this.handleStocked} />
                            <button onClick={this.props.onCloseModal}>cancel</button>
                            <button type='submit'>add<CheckCircleFill /></button>
                        </form>
                    </div>
                </div>
                <div className="inactive-zone"></div>
            </>
        );
    }
}

export default AddingApp;
