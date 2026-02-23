import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  position: static;
  margin: 0;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.7rem;
  z-index: 22;

  li {
    padding: 0;
  }

  li a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 0.62rem 1rem;
    border-radius: 999px;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 0.86rem;
    color: var(--text);
    text-decoration: none;
    border: 1px solid var(--line);
    background: var(--nav-pill-bg);
    transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease, color 0.22s ease;
  }

  li a::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, rgba(36, 70, 216, 0) 20%, rgba(140, 168, 255, 0.24) 50%, rgba(36, 70, 216, 0) 80%);
    transform: translateX(-125%);
    transition: transform 0.45s ease;
    pointer-events: none;
  }

  li a:hover {
    transform: translateY(-2px) scale(1.02);
    color: var(--accent);
    border-color: rgba(36, 70, 216, 0.45);
    box-shadow: 0 14px 28px rgba(36, 70, 216, 0.2);
  }

  li a:hover::before {
    transform: translateX(125%);
  }

  @media (max-width: 776px) {
    margin-top: 0;
    flex-flow: column nowrap;
    align-items: stretch;
    gap: 0.6rem;
    background: var(--nav-bg-strong);
    border-bottom: 1px solid var(--nav-line);
    position: fixed;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
    top: 0;
    right: 0;
    left: 0;
    z-index: 21;
    padding: calc(74px + 1rem) 1rem 1rem;
    transition: transform 0.35s ease-in-out;

    li a {
      width: 100%;
      border-radius: 14px;
      font-size: 0.84rem;
      background: var(--surface-strong);
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="/#home">Home</a></li>
      <li><a href="/#work">Work</a></li>
      <li><a href="/RaunakAnand_Resume.pdf" target="_blank" rel="noreferrer">Resume</a></li>
    </Ul>
  );
};

export default RightNav;
