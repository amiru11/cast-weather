import React from 'react';
import styled from 'styled-components';
import SearchBar from '@/components/SearchBar';
import UnitButton from '@/components/UnitButton';
import Logo from '@/components/Logo';

const Header = styled.header`
  width: 100%;
  height: 48px;
  max-width: 980px;
  margin: 0 auto;
  grid-area: header;
  display: grid;
  grid-template-columns: 120px 1fr 120px;
  column-gap: 10px;
  padding: 1rem 0;
`;

function HeaderComponent(): JSX.Element {
  return (
    <Header>
      <Logo />
      <SearchBar />
      <UnitButton />
    </Header>
  );
}

export default HeaderComponent;
