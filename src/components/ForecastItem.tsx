import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useTemperatureUnit } from '@/hooks/useTemperatureUnit';
import { unitForDisplay } from '@/lib/utils';

import IconWeather from '@/components/IconWeather';
import { RootState } from '@/modules';
import { IDetailWeatherItem } from '@/interfaces/weather';

interface IForecastItemProps {
  data: IDetailWeatherItem;
}

interface ICircleItemProps {
  circleColor: string;
}

function ForecastItem(props: IForecastItemProps): JSX.Element {
  const units = useSelector((state: RootState) => state.common.units);
  const { temp, weather } = props?.data;
  const [minTemperature] = useTemperatureUnit(units, temp.min);
  const [maxTemperature, castColor] = useTemperatureUnit(units, temp.max);
  const displayUnit = unitForDisplay(units);
  return (
    <Container>
      <CircleWrap>
        <CircleItem circleColor={String(castColor)}>
          <IconWeather type={'small'} icon={weather[0].icon} />
        </CircleItem>
        <TempItem>
          <span>
            {`${minTemperature}${displayUnit}`} |{' '}
            {`${maxTemperature}${displayUnit}`}
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
const CircleItem = styled.div<ICircleItemProps>`
  background: linear-gradient(
    10deg,
    transparent,
    ${(props) => props.circleColor}
  );
  border-radius: 50%;
  height: 100px;
  width: 100px;
  position: relative;
  /* opacity: 0.4; */
`;
const TempItem = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 30px;
  white-space: nowrap;
`;
