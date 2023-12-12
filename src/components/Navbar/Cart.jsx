import React from 'react'
import { useCart } from '../../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    return (
        <div>
            <h1>Carrito de Compras</h1>
            {cart.map((item) => (
                <div key={item.id}>
                    <p>{item.nombre}</p>
                    <button onClick={() => removeFromCart(item.id)}>Quitar del Carrito</button>
                </div>
            ))}
            <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
    );
};

export default Cart
