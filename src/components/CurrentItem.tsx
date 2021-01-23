import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/modules';
import styled from 'styled-components';

import IconWeather from '@/components/IconWeather';
import { ICurrentWeather } from '@/interfaces/weather';

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

const CircleItem = styled.div`
  background-color: rgb(255, 208, 123);
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
  return (
    <Container>
      <TempItem>
        <span>{`${Math.ceil(data.main.temp)}°C`}</span>
      </TempItem>
      <CircleWrap>
        <TitleWrap>
          <h2>{data.name}</h2>
        </TitleWrap>
        <CircleItem>
          <IconWeather type={'big'} />
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
