import React from 'react';

class Resto extends React.Component {
    order = () => {
        this.setState(
            alert(this.props.item.name)
        );
        // let orderItem = {
        //     name: this.props.item.name,
        //     price: this.props.item.price,
        //     image: this.props.item.image
        // }
        this.props.addToCart(this.props.item);
    }
    deleteBtnClickHandler = () => {
        this.props.deleteItem(this.props.item);
    }
    editBtnClickHandler = () => {
        this.props.editItem(this.props.item);
    }

    render() {
        let {name, category, price, image } = this.props.item;
        return(
            <div id="box">
                <div>
                    <img src={image} alt={name} />
                </div>
                <div>
                    <strong>{name}</strong>
                    <p><small>{category}</small></p>
                    <p><small>{price}</small></p>
                    <button onClick={this.order}>Order</button>
                    <button onClick={this.editBtnClickHandler}>Edit</button>
                    <button onClick={this.deleteBtnClickHandler}>Delete</button>
                </div>
            </div>
        )
    }
}

export default Resto;