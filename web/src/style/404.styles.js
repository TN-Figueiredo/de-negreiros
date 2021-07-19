import styled from "styled-components";
import { Link } from "gatsby";
import { getWindowDimensions } from "../lib/helpers";
import { HEADER_HEIGHT, FOOTER_HEIGHT } from "../lib/constants";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: ${getWindowDimensions().height - (HEADER_HEIGHT + FOOTER_HEIGHT)}px;
  width: 1140px;
  margin: auto;
  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 515px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  @media (max-width: 600px) {
    width: 334px;
    display: flex;
    justify-content: center;
    margin-left: ${(props) => props.theme.$spacingMD_LG};
  }
`;

export const StyledImage = styled.img`
  height: 515px;
  @media (max-width: 600px) {
    height: 234px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  @media (max-width: 600px) {
    width: 334px;
    align-self: auto;
    margin-top: ${(props) => props.theme.$spacingMD_LG};
    margin-left: ${(props) => props.theme.$spacingMD_LG};
  }
`;

export const Title = styled.span`
  font-size: ${(props) => props.theme.fonts.$fontSizeLG};
  font-weight: bold;
  font-family: Roboto;
  color: ${(props) => props.theme.colors.$blue500};
`;

export const Description = styled.span`
  font-size: ${(props) => props.theme.fonts.$fontSizeMD};
  margin-top: ${(props) => props.theme.$spacingXL};
  margin-bottom: ${(props) => props.theme.$spacingLG};
`;

export const LinkItem = styled(Link)`
  padding-top: ${(props) => props.theme.$spacingXXS};
  text-decoration: none;
  font-family: Roboto;
  color: ${(props) => props.theme.colors.$blue500};
  font-size: ${(props) => props.theme.fonts.$fontSizeMD};
  @media (max-width: 600px) {
    padding-bottom: ${(props) => props.theme.$spacingXXS};
  }
`;
