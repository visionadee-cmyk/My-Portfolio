import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

function Header() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const isActive = (path) => location.pathname === path ? 'active' : ''

  const navItems = [
    { path: '/', label: 'Home', icon: 'fa-home' },
    { path: '/skills', label: 'Skills', icon: 'fa-cogs' },
    { path: '/projects', label: 'Projects', icon: 'fa-project-diagram' },
    { path: '/achievements', label: 'Achievements', icon: 'fa-trophy' },
    { path: '/cv', label: 'CV', icon: 'fa-file-alt' },
    { path: '/webapps', label: 'Apps', icon: 'fa-mobile-alt' },
  ]

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <span className="logo-text">RG</span>
            </div>
            <div className="logo-text-container">
              <span className="logo-name">Abdul Rahman</span>
              <span className="logo-title">Gasim</span>
            </div>
          </Link>

          <div className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive(item.path)}`}
              >
                <i className={`fas ${item.icon}`}></i>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`mobile-nav-link ${isActive(item.path)}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className={`fas ${item.icon}`}></i>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
