import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #2c3e50;
  padding: 1rem 2rem;
  color: white;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: #3498db;
  }
`;

const CartCount = styled.span`
  background-color: #e74c3c;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 50%;
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Coffee Shop</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/cart">
            Cart
            {itemCount > 0 && <CartCount>{itemCount}</CartCount>}
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navbar; 