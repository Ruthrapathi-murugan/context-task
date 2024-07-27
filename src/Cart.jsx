import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const { state, addItem, removeItem } = useContext(CartContext);

    const totalQuantity = state.items.reduce((acc, item) => acc + item.quantity, 0);
    const totalAmount = state.items.reduce((acc, item) => acc + item.quantity * item.price, 0);

    return (
        <div>
            <center><h2>Shopping Cart</h2></center>
            <ul>
                {state.items.map(item => (
                    <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <img src={item.image} alt={item.title} style={{ width: 50, marginRight: '10px' }} />
                        <div>{item.title}</div>
                        <div style={{ marginLeft: 'auto' }}>
                            <button onClick={() => addItem(item.id)}>+</button>
                            <button onClick={() => removeItem(item.id)}>-</button>
                        </div>
                        <div style={{ marginLeft: '20px' }}>Quantity: {item.quantity}</div>
                        <div style={{ marginLeft: '20px' }}>Price: ${item.price}</div>
                    </li>
                ))}
            </ul>
            <h3>Total Quantity: {totalQuantity}</h3>
            <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;
