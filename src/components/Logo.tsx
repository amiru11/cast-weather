import React from 'react';
import styled from 'styled-components';

const Logo = styled.a`
  color: #333333;
  font-size: 2.25rem;
  text-decoration: #ff9999 underline wavy;
  align-self: center;

  & > b {
    font-weight: bold;
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
