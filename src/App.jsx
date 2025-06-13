import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Catalog from './pages/Catalog/Catalog'
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'
import Auth from './pages/Auth/Auth'
import Account from './pages/Account/Account'
import Checkout from './pages/Checkout/Checkout'
import Trends from './pages/Trends/Trends'
import Novelties from './pages/Novelties/Novelties'
import Discounts from './pages/Discounts/Discounts'

import './styles/App.css'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <Router>
            <div className="App">
              <Header />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/catalog" element={<Catalog />} />
                  <Route path="/product/:id" element={<Product />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/account" element={<Account />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/trends" element={<Trends />} />
                  <Route path="/novelties" element={<Novelties />} />
                  <Route path="/discounts" element={<Discounts />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App