import React from 'react';
import styled from 'styled-components';

import CurrentItem from '@/components/CurrentItem';
import ForecastItem from '@/components/ForecastItem';

const Main = styled.main`
  height: 100%;
`;

const ForecastList = styled.ul`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 1rem 0;
  column-gap: 10px;
`;

function MainComponent(): JSX.Element {
  return (
    <Main>
      <CurrentItem />
      <ForecastList>
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
        <ForecastItem />
      </ForecastList>
    </Main>
  );
}

export default MainComponent;
