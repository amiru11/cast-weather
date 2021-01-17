import React from 'react';
import styled from 'styled-components';
import SearchBar from '@/components/SearchBar';
import UnitButton from '@/components/UnitButton';

const Header = styled.header`
  width: 100%;
  height: 48px;
  max-width: 980px;
  margin: 0 auto;
  grid-area: header;
  display: grid;
  grid-template-columns: 60px 1fr 60px;
  grid-column: 2 / 3;
  padding: 1rem;
`;

function HeaderComponent(): JSX.Element {
  return (
    <Header>
      <SearchBar />
      <UnitButton />
    </Header>
  );
}

export default HeaderComponent;
