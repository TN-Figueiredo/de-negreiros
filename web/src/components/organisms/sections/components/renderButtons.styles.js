import styled from "styled-components";

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  @media (min-width: 601px) {
    margin-right: ${(props) => (props.first ? "7px" : "0px")};
    margin-left: ${(props) => (props.first ? "0px" : "7px")};
  }
  @media (max-width: 600px) {
    margin-bottom: ${(props) => (props.first ? "7px" : "0px")};
    margin-top: ${(props) => (props.first ? "0px" : "7px")};
  }
`;
