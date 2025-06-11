import React from 'react'

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Shopping Cart</button>
    </div>
  )
}

export default ProductCard
