import styled from "styled-components";

export const handleColor = (backgroundColor, theme) =>
  backgroundColor === "white" ? theme.colors.$blue500 : theme.colors.$grey000;

export const handleBackgroundColor = (backgroundColor, theme) =>
  backgroundColor === "blue" ? theme.colors.$blue500 : theme.colors.$grey500;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) =>
    handleBackgroundColor(props.backgroundColor, props.theme)};
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 580px;
  margin-bottom: ${(props) => props.theme.$spacingLG};
  margin-top: ${(props) => props.theme.$spacingLG};
`;
