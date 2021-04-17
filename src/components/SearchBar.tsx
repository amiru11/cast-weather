import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/modules';
import { getWeatherResultAsync } from '@/modules/cast-weather';
import { MdSearch, MdCancel } from 'react-icons/md';

interface ISearchButton {
  active?: boolean;
}

const { useState } = React;

function SearchBarComponent(): JSX.Element {
  const { units } = useSelector((state: RootState) => ({
    units: state.common.units,
  }));
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(target.value);
  };

  const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    console.log(event.key);
    if (event.key === 'Enter') {
      handleClickSubmit();
    }
  };
  const handleClickSubmit = (): void => {
    if (!searchValue) return;
    dispatch(getWeatherResultAsync.request({ cityName: searchValue, units }));
  };
  const handleClickCancel = (): void => {
    setSearchValue('');
  };

  return (
    <SearchWrap>
      <SearchButton active onClick={handleClickSubmit}>
        <MdSearch />
      </SearchButton>
      <SearchInput type="text" value={searchValue} onChange={handleChange} onKeyDown={handleKeydown} />
      <SearchButton active={!!searchValue} onClick={handleClickCancel}>
        <MdCancel />
      </SearchButton>
    </SearchWrap>
  );
}

export default SearchBarComponent;

const SearchWrap = styled.div`
  border: 1px solid #eeeeee;
  border-radius: 50px;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-self: center;
`;
const SearchInput = styled.input`
  border: 0;
  color: #333333;
  font-size: 1.25rem;
  font-weight: 500;
  max-width: 700px;
  width: 500px;
  outline: 0;
  letter-spacing: -0.1px;
  text-align: left;
  padding: 0;
`;
const SearchButton = styled.button<ISearchButton>`
  background-color: transparent;
  border: 0;
  color: #333333;
  cursor: pointer;
  font-size: 1.25rem;
  width: 30px;
  height: 22px;
  outline: 0;
  visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
`;
