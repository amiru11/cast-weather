import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const fontFamily = [
  'Gamja Flower',
  'Apple SD Gothic Neo',
  'AppleSDGothicNeo',
  'Noto Sans CJK KR',
  'NanumGothic',
  'Malgun Gothic',
  '맑은 고딕',
  '돋움',
  'dotum',
  'arial',
  'sans-serif',
].join(', ');

const resetFont = css`
  color: black;
  font-family: ${fontFamily};
  font-weight: 400;
  letter-spacing: -0.03em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export default createGlobalStyle`
  ${reset}

  html {
    ${resetFont}
  }

  html, body, #root {
    height: 100%;
  }
`;
