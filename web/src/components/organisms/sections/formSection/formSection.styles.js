import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: red;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 580px;
  margin-bottom: ${(props) => props.theme.$spacingLG};
`;
