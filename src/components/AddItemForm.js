import React from 'react';

class AddItemForm extends React.Component {
    state = {
        name: 'burger',
        category: '',
        price: 0,
        image: ''
    }
    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addNewItem = () => {
        let newItem = {
            name: this.state.name,
            price: this.state.price,
            category: this.state.category,
            image: this.state.image
        }
        this.props.addItem(newItem);
    }

    render() {
        return (
            <div>
                Name: <input type="text" name="name" value={this.state.name} onChange={this.inputChangeHandler} />
                Category: <input type="text" name="category" value={this.state.category} onChange={this.inputChangeHandler} />
                Price: <input type="number" name="price" value={this.state.price} onChange={this.inputChangeHandler} />
                Image: <input type="text" name="image" value={this.state.image} onChange={this.inputChangeHandler} />
                <button onClick={this.addNewItem}>Add Item</button>
            </div>
        )
    }
}

export default AddItemForm;