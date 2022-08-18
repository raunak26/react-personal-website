import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const NavMobile = styled.nav`
  position: fixed;
  width: 95%;
  text-align: center;
  z-index: 22;
  height: 90px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  background-color: #000000;
  .logo img{
    width: 60px;
    height: auto;
    margin: 8px 0px;
    border-radius: 50%;
    background-color: #ffffff;
  }
  
  .menu-web{
    display: flex;
  }
  .menu-mobile{
    display: none;
  }

  @media (max-width: 776px) {
    text-align: center;
    align-items: center;
    .logo{
      width: 100%;
      margin-right: 10vw;
    }
    .menu-web{
      display: none;
    }
    .menu-mobile{
      display: flex;
    }
  }

  @media (max-width: 320px) {
    text-align: center;
    align-items: center;
    .logo{
      width: 100%;
      margin-right: 30vw;
    }
  }
`

const Navbar = () => {
  return (
    <NavMobile>
      <div className="menu-mobile">
        <Burger />
      </div>
      <div className="logo">
        <a href="/"><img src="images/me.png" alt="bitmoji"/></a>
      </div>
      <div className="menu-web">
        <Burger />
      </div>
    </NavMobile>
  )
}

export default Navbar;