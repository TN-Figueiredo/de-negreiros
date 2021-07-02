import { createGlobalStyle } from "styled-components";

export const ThemeContainer = createGlobalStyle`
html {
  margin: auto;
  overflow-x: hidden;
}
  body {
    background-color: ${(props) => props.theme.colors.$grey100};
    margin: 0px;
    overflow-x: hidden;
  }
`;
