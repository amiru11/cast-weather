import React from 'react';
import styled from 'styled-components';

interface IButton {
  active: boolean;
}

const ButtonWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  place-content: center;
`;

const Button = styled.button<IButton>`
  background-color: ${(props) => (props.active ? '#333333' : 'transparent')};
  border: 0;
  border-radius: 50px;
  color: ${(props) => (props.active ? '#ffffff' : '#333333')};
  cursor: pointer;
  width: 40px;
  height: 40px;

  &:hover {
    background-color: #333333;
    color: #ffffff;
  }
`;

function UnitButton(): JSX.Element {
  return (
    <ButtonWrap>
      <Button active={true}>C</Button>
      <Button active={false}>F</Button>
    </ButtonWrap>
  );
}

export default UnitButton;
