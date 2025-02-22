import React from "react";
import { useCart } from "../context/CartContext";
import emptyImage from "../assets/empty.webp"; // Import the image

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const grandTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    const services = cartItems.map((item) => item.name).join("\n");

    // Prepare WhatsApp message
    const message = encodeURIComponent(
      `I am Interested in:\n${services}\n\nGrand Total: Rs.${grandTotal.toFixed(2)}`
    );

    window.open(`https://wa.me/917757984048?text=${message}`, "_blank");
  };

  const handleRemoveItem = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item.quantity > 1) {
      // If quantity > 1, just reduce the quantity by 1
      removeFromCart(id, item.quantity - 1);
    } else {
      // If quantity is 1, remove the item completely
      removeFromCart(id);
    }
  };

  return (
    <div className="cart-page">
      <br /><br /><br /><br />

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <img src={emptyImage} alt="Empty Cart" />
          <p>Your cart is empty :(</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.quantity} x Rs.{item.price}</p>
                <button onClick={() => handleRemoveItem(item.id)}>-</button>
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
