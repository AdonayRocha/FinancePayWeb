'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  background: linear-gradient(90deg, #1e4f43 0%, #0c2d23 100%);
  padding: 18px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  color: white;
  font-weight: 200;
  font-size: 25px;
  font-family: 'Segoe UI', sans-serif;
`;

const Nav = styled.nav`
  display: flex;
  gap: 28px;
`;

const StyledAnchor = styled.a`
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 300;
  font-family: 'Koh Santepheap', sans-serif;

  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = () => {
  return (
    <Header>
      <Link href="/wallet">
        <Logo>FINANCEPAY</Logo>
      </Link>
      <Nav>
        <Link href="/wallet" passHref legacyBehavior>
          <StyledAnchor>my wallet</StyledAnchor>
        </Link>
        <Link href="/criptos" passHref legacyBehavior>
          <StyledAnchor>criptos</StyledAnchor>
        </Link>
        <Link href="/user" passHref legacyBehavior>
          <StyledAnchor>user</StyledAnchor>
        </Link>
      </Nav>
    </Header>
  );
};

export default NavBar;