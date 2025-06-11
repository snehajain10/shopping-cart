import React from 'react'

function Cart({ cart, removeFromCart, changeQuantity }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="cart">
      <h2>My Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>Price: ₹{item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove Product</button>
            <div className="quantity-control">
              <button onClick={() => changeQuantity(item.id, 1)}>+</button>
              <span>{item.quantity}</span>
              <button onClick={() => changeQuantity(item.id, -1)}>-</button>
            </div>
          </div>
        </div>
      ))}
      <h3>Total Amount: ₹{total}</h3>
      <button className="payment-btn">Proceed to Payment</button>
    </div>
  )
}

export default Cart
