import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, Instagram, MessageCircle, Youtube } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <div className="footer-column">
            <h4>Магазин</h4>
            <ul>
              <li><Link to="/catalog">Каталог</Link></li>
              <li><Link to="/novelties">Новинки</Link></li>
              <li><Link to="/discounts">Скидки</Link></li>
              <li><Link to="/trends">Тренды</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Помощь</h4>
            <ul>
              <li><a href="#delivery">Доставка</a></li>
              <li><a href="#payment">Оплата</a></li>
              <li><a href="#returns">Возврат</a></li>
              <li><a href="#support">Поддержка</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Контакты</h4>
            <ul>
              <li>
                <a href="tel:+78005553535" className="contact-link">
                  <Phone size={16} />
                  8 800 555-35-35
                </a>
              </li>
              <li>
                <a href="mailto:info@energymotion.ru" className="contact-link">
                  <Mail size={16} />
                  info@energymotion.ru
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>О компании</h4>
            <ul>
              <li><a href="#about">О нас</a></li>
              <li><a href="#careers">Карьера</a></li>
              <li><a href="#news">Новости</a></li>
              <li><a href="#partners">Партнеры</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 Energy Motion. Все права защищены.</p>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-icon" aria-label="Telegram">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="social-icon" aria-label="YouTube">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer