import { createGlobalStyle } from 'styled-components';

import { Colors } from '../variables';

const { gray700, primaryLighter } = Colors;

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #root{
    min-height: 100%;
  }
  body{
    background-color: ${primaryLighter};
  }
  body,
  input,textarea{
    font-family: 'DM Serif Display', serif;
    font-weight: 400;
  }
  button{
    cursor: pointer;
    font-size: 14px;
    line-height: 24px;
  }
  [disabled]{
    cursor: not-allowed;
    opacity: 0.6;
    background-color: ${gray700};
  }
  h1,h2,h3,h4,h5,p,span{
    color:${gray700}
  }
  .txt-align__center{
    text-align: center;
  }
  .txt-align__end{
    text-align: end;
  }
`;
