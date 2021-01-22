import React from 'react';
import styled from 'styled-components';
import { GoMarkGithub } from 'react-icons/go';

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10px;

  p {
    font-size: 1.25rem;
  }

  a {
    color: #333333;
    font-size: 1.5rem;
    margin-left: 10px;
    transition: color 0.5s;

    &:hover {
      color: #ff9999;
    }
  }
`;

function FooterComponent(): JSX.Element {
  return (
    <Footer>
      <p>Made by SaeMii. 2021. Code on</p>
      <a href="https://github.com/amiru11/cast-weather" target="_blank" rel="noopener noreferrer">
        <GoMarkGithub />
      </a>
    </Footer>
  );
}

export default FooterComponent;
