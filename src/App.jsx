import React, { useState } from 'react'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'

const productsData = [
  {
    id: 1,
    name: 'T-shirt',
    price: 499,
    image: 'https://i.pinimg.com/736x/6d/5c/51/6d5c51a841f0196af85c59325e5b52c1.jpg'

  },
  {
    id: 2,
    name: 'Bag',
    price: 699,
    image: 'https://i.pinimg.com/736x/fd/a6/8c/fda68c5189f7cd37f044e201a77acc1e.jpg'
  },
  {
    id: 3,
    name: 'Hoodie',
    price: 799,
    image: 'https://i.pinimg.com/736x/bb/50/d0/bb50d0a4f70d5d7d096d00e852cdeee1.jpg'
  }
]

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const exist = cart.find(item => item.id === product.id)
    if (exist) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const changeQuantity = (id, delta) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ))
  }

  return (
    <div className="app">
      <h1>Shopping Cart</h1>
      <input className="search" type="text" placeholder="Search for Products..." />

      <div className="product-list">
        {productsData.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <Cart cart={cart} removeFromCart={removeFromCart} changeQuantity={changeQuantity} />
    </div>
  )
}

export default App
