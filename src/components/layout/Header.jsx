import { useEffect, useMemo, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/shop', label: 'Colección' }
];

export default function Header() {
  const { items } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items]
  );

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <span className="logo-mark">N</span>
          <div className="logo-text">
            <strong>Nuna Smart Storefront</strong>
            <span>Impacto positivo en cada elección</span>
          </div>
        </Link>
        <nav className="nav desktop-nav" aria-label="Principal">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={handleNavClick}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-actions">
          <Link
            to="/login"
            className="login-button"
            aria-label="Abrir inicio de sesión"
            onClick={handleNavClick}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="login-icon" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </Link>

          <Link
            to="/cart"
            className="cart-button icon-only"
            aria-label={`Abrir carrito${cartCount ? ` con ${cartCount} artículos` : ''}`}
            onClick={handleNavClick}
          >
            <span className="cart-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3.5 5.5h2.4l1.7 9.8a1.8 1.8 0 0 0 1.8 1.5h8.5a1.8 1.8 0 0 0 1.8-1.4l1.5-6.2H6.6" />
                <path d="M8.2 15.5h9" />
                <circle cx="10" cy="19.5" r="1.5" />
                <circle cx="17" cy="19.5" r="1.5" />
              </svg>
            </span>
            {cartCount > 0 ? <span className="cart-count">{cartCount}</span> : null}
          </Link>

          <button
            type="button"
            className={isMenuOpen ? 'hamburger open' : 'hamburger'}
            aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="hamburger-line top" />
            <span className="hamburger-line middle" />
            <span className="hamburger-line bottom" />
          </button>
        </div>
      </div>
      <div className={isMenuOpen ? 'mobile-nav open' : 'mobile-nav'}>
        <div className="mobile-nav-surface" role="dialog" aria-modal="true">
          <nav className="mobile-nav-list" aria-label="Navegación móvil">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
                onClick={handleNavClick}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
              onClick={handleNavClick}
            >
              Carrito
              {cartCount > 0 ? <span className="mobile-count">{cartCount}</span> : null}
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
