import styled, { createGlobalStyle } from "styled-components";

export const ThemeContainer = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.$grey100};
  }
`;

export const StyledContainer = styled.div`
  height: 98.5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
