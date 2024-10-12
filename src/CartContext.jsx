import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);
    

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                return prevItems.map((i) => 
                    i.id === item.id ? {...i, quantity: i.quantity + 1} : i
                );
            }
            return [...prevItems, {...item, id: item.name, quantity: 1}];
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => 
            prevItems.filter((item) => item.id !== itemId)
        );
    };

    const updateQuantity = (itemId, newQuantity) => {
        setCartItems((prevItems) => 
            prevItems.map((item) => 
                item.id === itemId ? {...item, quantity: newQuantity } : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};