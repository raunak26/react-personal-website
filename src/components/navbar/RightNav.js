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
    padding: 0.62rem 1rem;
    border-radius: 999px;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    font-size: 0.86rem;
    color: var(--text);
    text-decoration: none;
    border: 1px solid var(--line);
    background: var(--nav-pill-bg);
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }

  li a:hover {
    transform: translateY(-1px);
    border-color: rgba(36, 70, 216, 0.34);
    box-shadow: 0 12px 24px rgba(30, 44, 86, 0.12);
  }

  @media (max-width: 776px) {
    margin-top: 70px;
    flex-flow: column nowrap;
    align-items: stretch;
    gap: 0.6rem;
    background: var(--nav-bg-strong);
    border-bottom: 1px solid var(--nav-line);
    position: fixed;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-130%)'};
    top: 0;
    right: 0;
    left: 0;
    padding: 1rem;
    transition: transform 0.35s ease-in-out;

    li a {
      width: 100%;
      justify-content: center;
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
