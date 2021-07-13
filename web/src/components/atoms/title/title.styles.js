import styled from "styled-components";

export const Text = styled.span`
  font-family: Roboto;
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : props.theme.fonts.$fontSizeXL};
  font-weight: ${(props) => props.theme.fonts.$fontWeightMed};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.$grey000};
  line-height: ${(props) => props.theme.fonts.$lineHeightLG};
  @media (max-width: 600px) {
    font-size: ${(props) => props.theme.fonts.$fontSizeLG};
  }
`;
