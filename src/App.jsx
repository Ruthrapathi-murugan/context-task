import React from 'react';
import { CartProvider } from './CartContext';
import Cart from './Cart';

function App() {
    return (
        <CartProvider>
            <div className="App">
                <Cart />
            </div>
        </CartProvider>
    );
}

export default App;
