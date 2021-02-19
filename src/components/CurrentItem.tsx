import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useTemperatureUnit } from '@/hooks/useTemperatureUnit';
import { unitForDisplay } from '@/lib/utils';

import IconWeather from '@/components/IconWeather';
import { RootState } from '@/modules';
import { ICurrentWeather } from '@/interfaces/weather';

interface ICircleItemProps {
  circleColor: string;
}

function CurrentItem(): JSX.Element {
  const {
    data,
    loading,
    error,
  }: {
    data: ICurrentWeather;
    loading: boolean;
    error: Error;
  } = useSelector((state: RootState) => state.castWeather.currentWeather);
  const units = useSelector((state: RootState) => state.common.units);
  const [mainTemperature, castColor] = useTemperatureUnit(
    units,
    data.main.temp,
  );
  const displayUnit = unitForDisplay(units);
  return (
    <Container>
      <TempItem>
        <span>{`${mainTemperature}${displayUnit}`}</span>
      </TempItem>
      <CircleWrap>
        <TitleWrap>
          <h2>{data.name}</h2>
        </TitleWrap>
        <CircleItem circleColor={String(castColor)}>
          <IconWeather type={'big'} icon={data.weather[0].icon} />
        </CircleItem>
      </CircleWrap>
      <DescList>
        <DescListItem>{`Humid: ${data.main.humidity}%`}</DescListItem>
        <DescListItem>{`Wind: ${data.wind.speed}/h`}</DescListItem>
      </DescList>
    </Container>
  );
}

export default CurrentItem;

const Container = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 200px 1fr;
  padding: 1rem 0;
  column-gap: 50px;
`;

const TitleWrap = styled.div`
  text-align: center;
  margin: 20px 0;
  font-weight: 700;
  font-size: 4rem;
  letter-spacing: -0.11px;
  text-transform: capitalize;
  color: #333333;
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
  height: 200px;
  width: 200px;
  position: relative;
`;
const TempItem = styled.div`
  font-size: 2rem;
  font-weight: bold;
  align-self: flex-end;
  justify-self: flex-end;
`;
const DescList = styled.ul`
  font-size: 1.6rem;
  align-self: flex-end;
`;
const DescListItem = styled.li``;
