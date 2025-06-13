import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { useCart } from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext'
import { Sun, Moon, ShoppingCart, User, LogOut } from 'lucide-react'
import './Header.css'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const { getTotalItems } = useCart()
  const { user, isLoggedIn, logout } = useAuth()
  const [showUserMenu, setShowUserMenu] = useState(false)
  const navigate = useNavigate()

  const handleAuthClick = () => {
    if (isLoggedIn) {
      setShowUserMenu(!showUserMenu)
    } else {
      navigate('/auth')
    }
  }

  const handleLogout = () => {
    logout()
    setShowUserMenu(false)
    navigate('/')
  }

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          ENERGY MOTION
        </Link>
        
        <nav className="nav">
          <ul>
            <li><Link to="/catalog">Каталог</Link></li>
            <li><Link to="/trends">Тренды</Link></li>
            <li><Link to="/novelties">Новинки</Link></li>
            <li><Link to="/discounts">Скидки</Link></li>
          </ul>
        </nav>
        
        <div className="user-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Переключить тему"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <div className="auth-section">
            <button 
              className="auth-btn"
              onClick={handleAuthClick}
            >
              <User size={20} />
              {isLoggedIn ? user?.name : 'Войти'}
            </button>
            
            {showUserMenu && isLoggedIn && (
              <div className="user-menu">
                <Link 
                  to="/account" 
                  onClick={() => setShowUserMenu(false)}
                >
                  Мой профиль
                </Link>
                <button onClick={handleLogout}>
                  <LogOut size={16} />
                  Выйти
                </button>
              </div>
            )}
          </div>
          
          <Link to="/cart" className="cart-btn">
            <ShoppingCart size={20} />
            <span className="cart-count">{getTotalItems()}</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header