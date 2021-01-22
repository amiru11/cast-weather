import React from 'react';
import styled from 'styled-components';

const Logo = styled.a`
  color: #333333;
  font-size: 2.25rem;
  text-decoration: none;
  align-self: center;
  position: relative;

  & > b {
    font-weight: bold;
  }

  &::after {
    background-color: #ff9999;
    content: '';
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 0%;
    height: 1px;
    transition: all 0.5s;
  }

  &:hover {
    color: #ff9999;
    &::after {
      width: 100%;
    }
  }
`;

function LogoComponent(): JSX.Element {
  return (
    <Logo href="/">
      <b>Saem</b>
      <span>Cast</span>
    </Logo>
  );
}

export default LogoComponent;
