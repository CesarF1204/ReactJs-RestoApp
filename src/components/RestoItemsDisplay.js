// import React from 'react';
import { useState } from 'react';
import Resto from './Resto';
import AddItemForm from './AddItemForm';
import DataBindingActivity from './DataBindingActivity';
// import EditItemForm from './EditItemForm';

const RestoItemsDisplay = (props) => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: "Burger",
            price: 50,
            category: "Food",
            status: 'active',
            image: "https://image.flaticon.com/icons/svg/1046/1046784.svg"
        },
        {
            id: 2,
            name: "Pizza",
            price: 100,
            category: "Food",
            status: 'active',
            image: "https://image.flaticon.com/icons/svg/1046/1046771.svg"
        },
        {
            id: 3,
            name: "Fries",
            price: 25,
            category: "Food",
            status: 'active',
            image: "https://image.flaticon.com/icons/svg/1046/1046786.svg"
        },
        {
            id: 4,
            name: "Coffee",
            price: 35,
            category: "Drink",
            status: 'active',
            image: "https://image.flaticon.com/icons/svg/1046/1046785.svg"
        },
        {
            id: 5,
            name: "Iced Tea",
            price: 45,
            category: "Drink",
            status: 'active',
            image: "https://image.flaticon.com/icons/svg/1046/1046782.svg"
        },
        {
            id: 6,
            name: "Hot Tea",
            price: 45,
            category: "Drink",
            status: 'active',
            image: "https://image.flaticon.com/icons/svg/1046/1046792.svg"
        }
    ]);
    const [filter, setFilters] = useState('All');
    const [carts, setCarts] = useState([]);
    const [editedItem, setEditItem] = useState(null);
    const changeDisplay = (category) => {
        setFilters(category);
    }
    const addItem = (newItem) => {
        newItem.id = items.length + 1
        let itemsCopy = [...items];
        itemsCopy.push(newItem);
        setItems(itemsCopy);
    }
    const addToCart = (orderItem) => {
        // SOLUTION 1
        // let orderCopy = [...this.state.carts];
        // let exists = false;
        // orderCopy.forEach( cartItem => {
        //     if(cartItem.id === orderItem.id) {
        //         exists = true;
        //         cartItem.quantity++;
        //     }
        // });
        // if(!exists) {
        //     orderItem.quantity = 1;
        //     orderCopy.push(orderItem);
        // }
        // this.setState({
        //     carts: orderCopy
        // })

        // SOLUTION 2
        let orderCopy = [...carts];
        let index = orderCopy.findIndex(cartItem => cartItem.id === orderItem.id);
        if(index === -1) {
            orderItem.quantity = 1;
            orderCopy.push(orderItem);
        } else {
            orderCopy[index].quantity++;
        }
        setCarts(orderCopy);
    }
    const deleteItem = (item) => {
        let itemsCopy = [...items];
        itemsCopy = itemsCopy.filter(i => i.id !== item.id);
        setItems(itemsCopy);
    }
    const editItem = (item) => {
        setEditItem(item);
    }
    const updateItem = (item) => {
        let itemsCopy = [...items];
        let index = itemsCopy.findIndex( i => i.id === item.id);
        itemsCopy[index] = item;
        // this.setState({
        //     items: itemsCopy,
        //     editItem: null
        // });
        setItems(itemsCopy);
        
    }
    const itemsFiltered = filter === 'All' ? 
    items : items.filter(item => item.category === filter);
    const products = itemsFiltered.map( item =>
        < Resto
        key={item.id}
        item={item}
        addToCart={addToCart}
        deleteItem={deleteItem}
        editItem={editItem} />    
    )
    const cartDisplay = carts.map( item => 
        {
            return  <tr key={item.id}>
                        <td><img src={item.image} alt={item.name} /></td>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price * item.quantity}</td>
                    </tr>
        }
    )

    return (
        <div>
            <h3>Menu</h3>
            <div>
                <AddItemForm addItem={addItem} editItem={editedItem} updateItem={updateItem} />
                <button onClick={() => changeDisplay('All')}>All</button>
                <button onClick={() => changeDisplay('Food')}>Food</button>
                <button onClick={() => changeDisplay('Drink')}>Drink</button>
            </div>
            {/* {this.state.editItem &&
            <EditItemForm editItem={this.state.editItem} updateItem={this.updateItem}/> } */}
            <div id="container">
                {products}
            </div>
                <DataBindingActivity/>
            <hr />
            <div>
                <h3>My Cart</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartDisplay}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

// CLASS-BASED COMPONENT
// class RestoItemsDisplay extends React.Component {
//     state = {
//         items: [
//             {
//                 id: 1,
//                 name: "Burger",
//                 price: 50,
//                 category: "Food",
//                 status: 'active',
//                 image: "https://image.flaticon.com/icons/svg/1046/1046784.svg"
//             },
//             {
//                 id: 2,
//                 name: "Pizza",
//                 price: 100,
//                 category: "Food",
//                 status: 'active',
//                 image: "https://image.flaticon.com/icons/svg/1046/1046771.svg"
//             },
//             {
//                 id: 3,
//                 name: "Fries",
//                 price: 25,
//                 category: "Food",
//                 status: 'active',
//                 image: "https://image.flaticon.com/icons/svg/1046/1046786.svg"
//             },
//             {
//                 id: 4,
//                 name: "Coffee",
//                 price: 35,
//                 category: "Drink",
//                 status: 'active',
//                 image: "https://image.flaticon.com/icons/svg/1046/1046785.svg"
//             },
//             {
//                 id: 5,
//                 name: "Iced Tea",
//                 price: 45,
//                 category: "Drink",
//                 status: 'active',
//                 image: "https://image.flaticon.com/icons/svg/1046/1046782.svg"
//             },
//             {
//                 id: 6,
//                 name: "Hot Tea",
//                 price: 45,
//                 category: "Drink",
//                 status: 'active',
//                 image: "https://image.flaticon.com/icons/svg/1046/1046792.svg"
//             },
//         ],
//         filter: 'All',
//         carts: [],
//         editItem: null,
//     } 
//     changeDisplay = (category) => {
//         this.setState({
//             filter: category
//         });
//     }
//     addItem = (newItem) => {
//         newItem.id = this.state.items.length + 1
//         let itemsCopy = [...this.state.items];
//         itemsCopy.push(newItem);

//         this.setState({
//             items: itemsCopy
//         })
//     }
//     addToCart = (orderItem) => {
//         // SOLUTION 1
//         // let orderCopy = [...this.state.carts];
//         // let exists = false;
//         // orderCopy.forEach( cartItem => {
//         //     if(cartItem.id === orderItem.id) {
//         //         exists = true;
//         //         cartItem.quantity++;
//         //     }
//         // });
//         // if(!exists) {
//         //     orderItem.quantity = 1;
//         //     orderCopy.push(orderItem);
//         // }
//         // this.setState({
//         //     carts: orderCopy
//         // })

//         // SOLUTION 2
//         let orderCopy = [...this.state.carts];
//         let index = orderCopy.findIndex(cartItem => cartItem.id === orderItem.id);
//         if(index === -1) {
//             orderItem.quantity = 1;
//             orderCopy.push(orderItem);
//         } else {
//             orderCopy[index].quantity++;
//         }
//         this.setState({
//             carts: orderCopy
//         })
//     }

//     deleteItem = (item) => {
//         let itemsCopy = [...this.state.items];
//         itemsCopy = itemsCopy.filter(i => i.id !== item.id);
//         this.setState({
//             items: itemsCopy
//         });
//     }
//     editItem = (item) => {
//         this.setState({
//             editItem: item
//         });
//     }
//     updateItem = (item) => {
//         let itemsCopy = [...this.state.items];
//         let index = itemsCopy.findIndex( i => i.id === item.id);
//         itemsCopy[index] = item;
//         this.setState({
//             items: itemsCopy,
//             editItem: null
//         });
//     }

//     render() {
//         let items = this.state.filter === 'All' ? 
//         this.state.items : this.state.items.filter(item => item.category === this.state.filter);

//         let products = items.map( item =>
//             < Resto
//             key={item.id}
//             item={item}
//             addToCart={this.addToCart}
//             deleteItem={this.deleteItem}
//             editItem={this.editItem} />    
//         )

//         let cartDisplay = this.state.carts.map( item => 
//             {
//                 return  <tr key={item.id}>
//                             <td><img src={item.image} alt={item.name} /></td>
//                             <td>{item.name}</td>
//                             <td>{item.quantity}</td>
//                             <td>{item.price * item.quantity}</td>
//                         </tr>
//             }
//         )
        
//         return (
//             <div>
//                 <h3>Menu</h3>
//                 <div>
//                     <AddItemForm addItem={this.addItem} editItem={this.state.editItem} updateItem={this.updateItem} />
//                     <button onClick={() => this.changeDisplay('All')}>All</button>
//                     <button onClick={() => this.changeDisplay('Food')}>Food</button>
//                     <button onClick={() => this.changeDisplay('Drink')}>Drink</button>
//                 </div>
//                 {/* {this.state.editItem &&
//                 <EditItemForm editItem={this.state.editItem} updateItem={this.updateItem}/> } */}
//                 <div id="container">
//                     {products}
//                 </div>
//                     <DataBindingActivity/>

//                 <hr />
//                 <div>
//                     <h3>My Cart</h3>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Image</th>
//                                 <th>Name</th>
//                                 <th>Quantity</th>
//                                 <th>Price</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {cartDisplay}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
            
//         )
//     }
// }

export default RestoItemsDisplay;