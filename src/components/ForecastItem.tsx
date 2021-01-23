import React from 'react';
import styled from 'styled-components';
import IconWeather from '@/components/IconWeather';
import { IDetailWeatherItem } from '@/interfaces/weather';

interface IForecastItemProps {
  data: IDetailWeatherItem;
}

function ForecastItem(props: IForecastItemProps): JSX.Element {
  const { temp } = props?.data;
  return (
    <Container>
      <CircleWrap>
        <CircleItem>
          <IconWeather type={'small'} />
        </CircleItem>
        <TempItem>
          <span>
            {Math.ceil(temp.min)}°C | {Math.ceil(temp.max)}°C
          </span>
        </TempItem>
      </CircleWrap>
    </Container>
  );
}

export default ForecastItem;

const Container = styled.div`
  margin-top: 80px;
`;

const CircleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CircleItem = styled.div`
  background-color: rgb(255, 208, 123);
  border-radius: 50%;
  height: 100px;
  width: 100px;
  position: relative;
`;
const TempItem = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 30px;
  white-space: nowrap;
`;
