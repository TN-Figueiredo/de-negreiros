import { createGlobalStyle } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ThemeContainer = createGlobalStyle`
html {
  margin: auto;
  overflow-x: hidden;
}
  body {
    background-color: ${(props) => props.theme.colors.$grey100};
    margin: 0px;
    overflow-x: hidden;
    font-family: Open Sans;
  }
`;
