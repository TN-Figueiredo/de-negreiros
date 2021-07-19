import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.$blue500};
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
