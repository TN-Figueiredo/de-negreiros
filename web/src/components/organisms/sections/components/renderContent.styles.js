import styled from "styled-components";

export const Content = styled.div`
  max-width: 570px;
  padding: ${(props) => props.theme.$spacingXL};
  @media (max-width: 600px) {
  }
`;

// TODO: CLEAN UP BLOCK CONTENT AFTERWARDS
export const BlockContentJustified = styled.span`
  text-align: justify;
  text-justify: inter-word;
`;
