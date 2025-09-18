import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Minha Logo</div>

      <ul className="navbar__links">
        <li>
          <NavLink
            to="/verificacao"
            className={({ isActive }) => (isActive ? 'navlink active' : 'navlink')}
          >
            Verificação de Contas
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/historico"
            className={({ isActive }) => (isActive ? 'navlink active' : 'navlink')}
          >
            Histórico de Verificação
          </NavLink>
        </li>
        <li>
          <button type="button" className="navbar__logout">Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;