import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  // Calculate Grand Total
  const grandTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Function to generate WhatsApp message and redirect
  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    // Extract service names from cart items
    const services = cartItems.map((item) => item.name).join("\n");

    // Prepare WhatsApp message
    const message = encodeURIComponent(
      `I am Interested in:\n${services}\n\nGrand Total: Rs.${grandTotal.toFixed(2)}`
    );

    // Redirect to WhatsApp with pre-filled message
    window.open(`https://wa.me/917757984048?text=${message}`, "_blank");
  };

  return (
    <div className="cart-page">
      <br /><br /><br /><br />

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.quantity} x Rs.{item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
                
              </div>
            ))}
          </div>

          {/* Grand Total */}
          <div className="cart-summary">
            <h3>Grand Total: Rs.{grandTotal.toFixed(2)}</h3>

            <button className="checkout-btn" onClick={handleCheckout} disabled={cartItems.length === 0}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
