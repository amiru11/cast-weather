import React from 'react';
import styled from 'styled-components';

interface IButton {
  active: boolean;
}

const ButtonWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-self: center;
  justify-self: end;
  column-gap: 10px;
`;

const Button = styled.button<IButton>`
  background-color: ${(props) => (props.active ? '#333333' : 'transparent')};
  border: 0;
  border-radius: 50%;
  color: ${(props) => (props.active ? '#ffffff' : '#333333')};
  font-weight: 800;
  font-size: 1.75rem;
  cursor: pointer;
  width: 48px;
  height: 48px;
  outline: 0;
  transition: all 0.5s;

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
