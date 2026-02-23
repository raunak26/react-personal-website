import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const NavMobile = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 22;
  height: 84px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--nav-bg);
  border-bottom: 1px solid var(--nav-line);
  backdrop-filter: blur(10px);

  .logo {
    display: flex;
    align-items: center;
  }

  .logo img {
    width: 50px;
    height: 50px;
    border-radius: 16px;
    border: 1px solid var(--line);
    box-shadow: var(--shadow-soft);
    background: var(--surface-strong);
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 0.65rem;
  }

  .theme-toggle {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    width: 64px;
    height: 38px;
    padding: 0 4px;
    border-radius: 999px;
    border: 1px solid var(--line);
    background: #f1f3f7;
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }

  .theme-toggle[data-theme='dark'] {
    background: #0f1014;
  }

  .theme-toggle .toggle-knob {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 999px;
    background: #0f1014;
    color: #f8f9fc;
    font-size: 0.95rem;
    line-height: 1;
    transform: translateX(0);
    transition: transform 0.22s ease, background-color 0.22s ease, color 0.22s ease;
  }

  .theme-toggle[data-theme='dark'] .toggle-knob {
    transform: translateX(26px);
    background: #f8f9fc;
    color: #0f1014;
  }

  .theme-toggle:hover {
    transform: translateY(-1px);
    border-color: rgba(36, 70, 216, 0.34);
    box-shadow: 0 10px 20px rgba(30, 44, 86, 0.12);
  }

  .theme-toggle:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  .menu-web {
    display: flex;
  }

  .menu-mobile {
    display: none;
  }

  @media (max-width: 776px) {
    height: 74px;
    padding: 0 16px;

    .logo {
      margin: 0 auto;
    }

    .menu-web {
      display: none;
    }

    .menu-mobile {
      display: flex;
    }

    .nav-actions {
      gap: 0.35rem;
    }

    .theme-toggle {
      width: 58px;
      height: 34px;
      padding: 0 3px;
    }

    .theme-toggle .toggle-knob {
      width: 26px;
      height: 26px;
      font-size: 0.88rem;
    }

    .theme-toggle[data-theme='dark'] .toggle-knob {
      transform: translateX(23px);
    }
  }
`;

const Navbar = ({ theme = 'light', onToggleTheme = () => {} }) => {
  return (
    <NavMobile>
      <div className="menu-mobile">
        <Burger />
      </div>
      <div className="logo">
        <a href="/"><img src="images/me.png" alt="bitmoji"/></a>
      </div>
      <div className="nav-actions">
        <div className="menu-web">
          <Burger />
        </div>
        <button className="theme-toggle" data-theme={theme} onClick={onToggleTheme} aria-label="Toggle color theme" aria-pressed={theme === 'dark'}>
          <span className="toggle-knob" aria-hidden="true">{theme === 'dark' ? '🌙' : '☀️'}</span>
        </button>
      </div>
    </NavMobile>
  );
};

export default Navbar;
