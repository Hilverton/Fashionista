import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export function Navbar({ qtd, handleSidebar, theme, switchTheme }) {
  const type = theme === 'light';
  return (
    <>
      <header className={`navbar ${type ? 'navbar__light' : 'navbar__dark'}`}>
          <nav className="navbar__container">
              <Link to="/" className={`navbar__home ${!type && 'white'}`}>
                <p>FASHIONISTA</p>
              </Link>
              <div className="navbar__btns">
                <button onClick={switchTheme} className="navbar__btn">
                  {!type ? <i className={`fas fa-sun  ${!type && 'white'}`}></i> : <i className="fas fa-moon"></i>}
                </button>
                <button onClick={() => handleSidebar('search')} className="navbar__btn">
                  <i className={`fas fa-search ${!type && 'white'}`}></i>
                </button>
                <button onClick={() => handleSidebar('Car')} className="navbar__btn">
                  <i className={`fas fa-shopping-basket ${!type && 'white'}`}></i>
                  <span className="navbar__qtd">{qtd}</span>
                </button>
              </div>
          </nav>
      </header>
    </>
  );
}
