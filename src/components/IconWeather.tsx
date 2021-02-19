import React from 'react';
import styled from 'styled-components';
// import { IconName } from "react-icons/wi";

interface IIcon {
  type: string;
}

interface IIconWeatherProps {
  type: string;
  icon: string;
}

function IconWeatherComponent({ type, icon }: IIconWeatherProps): JSX.Element {
  return (
    <Icon type={type}>
      <img src={`images/${icon}.svg`} alt="" />
    </Icon>
  );
}

export default IconWeatherComponent;

const Icon = styled.div.attrs((props: IIcon) => ({
  width: props.type === 'big' ? '100px' : '50px',
  height: props.type === 'big' ? '100px' : '50px',
  bottom: props.type === 'big' ? '-50px' : '-25px',
}))<IIcon>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: transparent;
  border-radius: 50%;
  position: absolute;
  bottom: ${(props) => props.bottom};
  right: 0;
`;
