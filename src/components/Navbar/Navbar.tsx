import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="logo">
        <h1>Joaquín Navarrete</h1>
        <p>Estudiante de Ingeniería Civil en Informática | Creador de Soluciones Web</p>
      </div>
      <nav aria-label="Navegación principal" className="nav">
        <ul className="nav__list">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link')}>
              Inicio / Sobre mí
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link')}>
              Trabajos y GitHub API
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link')}>
              Contacto
            </NavLink>
          </li>
          <li>
            <button
              type="button"
              onClick={toggleTheme}
              className="nav__theme-btn"
              aria-label="Cambiar tema de color"
            >
              {theme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};