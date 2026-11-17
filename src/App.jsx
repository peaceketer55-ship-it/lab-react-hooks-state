
import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false)

  // Cart state
  const [cartItems, setCartItems] = useState([])

  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Function to add products to cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  return (
    <div
      style={{
        backgroundColor: darkMode ? '#222' : '#fff',
        color: darkMode ? '#fff' : '#000',
        minHeight: '100vh',
        padding: '20px'
      }}
    >
      <h1>🛒 Shopping App</h1>

      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Dark Mode Toggle */}
      <DarkModeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Category Filter */}
      <label>Filter by Category: </label>

      <select
        value={selectedCategory}
        onChange={(event) => setSelectedCategory(event.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* Product List */}
      <ProductList
        selectedCategory={selectedCategory}
        addToCart={addToCart}
      />

      {/* Cart */}
      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App

