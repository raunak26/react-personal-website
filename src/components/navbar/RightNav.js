import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  position: static;
  margin-top: 0px;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 22;
  li {
    padding: 30px 25px;
  }
  li:active{
    text-decoration: underline;
    text-decoration-color: black;
  }
  li a {
    font-family: 'M PLUS Rounded 1c';
    font-weight: bold;
    font-size: 18px;
    color: white;
    text-decoration: none;
  }
  li a:hover {
    color: 37392E;
    text-decoration: underline;
    text-decoration-color: white;
  }
  li a:active {
    text-decoration: underline;
    text-decoration-color: white;
  }
  @media (max-width: 776px) {
    margin-top: 90px;
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-150%)'};
    top: 0;
    right: 0;
    height: 40vh;
    width: 100vw; 
    padding-top: 2rem;
    transition: transform 0.5s ease-in-out;
    li {
      color: white;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="/work">Work</a></li>
      <li><a href="/RaunakAnand_Resume.pdf" target="_blank" rel="noreferrer">Resume</a></li>
    </Ul>
  )
}

export default RightNav;