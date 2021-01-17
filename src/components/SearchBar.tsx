import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getWeatherByCityAsync } from '@/modules/cast-weather';

const { useState } = React;
const SearchWrap = styled.div`
  border: 1px solid #eeeeee;
  border-radius: 50px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  grid-column-start: 2;
  justify-self: center;
`;
const SearchInput = styled.input`
  border: 0;
  color: #465866;
  font-size: 1.25rem;
  font-weight: 500;
  max-width: 700px;
  width: 500px;
  outline: 0;
  letter-spacing: -0.1px;
  text-align: left;
`;
const SearchButton = styled.button`
  border: 0;
  width: 30px;
  height: 30px;
`;

function SearchBarComponent(): JSX.Element {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(target.value);
  };
  const handleClickSubmit = (): void => {
    if (!searchValue) return;

    dispatch(getWeatherByCityAsync.request(searchValue));
  };
  const handleClickCancel = (): void => {
    setSearchValue('');
  };

  return (
    <SearchWrap>
      <SearchButton onClick={handleClickSubmit}>{`Search`}</SearchButton>
      <SearchInput type="text" value={searchValue} onChange={handleChange} />
      <SearchButton onClick={handleClickCancel}>{`Cancel`}</SearchButton>
    </SearchWrap>
  );
}

export default SearchBarComponent;
