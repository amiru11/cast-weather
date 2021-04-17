import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/modules';
import styled from 'styled-components';

import CurrentItem from '@/components/CurrentItem';
import ForecastItem from '@/components/ForecastItem';

function MainComponent(): JSX.Element {
  const { data: detailWeather, loading: detailLoading, error: detailError } = useSelector((state: RootState) => ({
    ...state.castWeather.detailWeather,
  }));
  const { data: currentWeather, loading: currentLoading, error: currentError } = useSelector((state: RootState) => ({
    ...state.castWeather.currentWeather,
  }));

  useEffect(() => {
    if (detailError) {
      alert(`Sorry! I can't find City!`);
    }
  }, [detailError]);

  console.log('detailWeather', detailWeather);
  return (
    <Main>
      {!currentLoading && currentWeather && <CurrentItem />}
      {detailWeather && (
        <ForecastList>
          {detailWeather?.daily.length > 0 &&
            detailWeather?.daily.map((forecastItem) => <ForecastItem key={forecastItem.dt} data={forecastItem} />)}
        </ForecastList>
      )}
    </Main>
  );
}

export default MainComponent;

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
