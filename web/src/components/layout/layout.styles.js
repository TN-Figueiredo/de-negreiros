import styled, { createGlobalStyle } from "styled-components";

export const ThemeContainer = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.$grey100};
    margin: 0px;
  }
`;
