import styled from "styled-components";
import { handleBackgroundColor } from "../../../../lib/helpers";

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
  @media (max-width: 600px) {
    width: 334px;
    padding-left: ${(props) => props.theme.$spacingMD_LG};
  }
`;
