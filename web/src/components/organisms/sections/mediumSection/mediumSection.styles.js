import styled from "styled-components";

export const Container = styled.div`
  height: 430px;
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const LeftContent = styled.div`
  width: 570px;
  background-color: green;
`;

export const RightContent = styled.div`
  width: 570px;
  background-color: teal;
`;
