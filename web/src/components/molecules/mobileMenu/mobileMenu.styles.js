import styled from "styled-components";
import { Link } from "gatsby";
import { getWindowDimensions } from "../../../lib/helpers";

const HEADER_HEIGHT = 90;
const FOOTER_HEIGHT = 270;

export const Container = styled.div`
  height: ${getWindowDimensions().height - (HEADER_HEIGHT + FOOTER_HEIGHT)}px;
`;

export const Content = styled.div`
  padding: ${(props) => props.theme.$spacingLG};
  flex-direction: column;
`;

export const LinkContainer = styled.div`
  height: 30px;
  padding-top: ${(props) => props.theme.$spacingXXS};
  padding-bottom: ${(props) => props.theme.$spacingXXS};
`;

export const LinkItem = styled(Link)`
  height: 30px;
  padding-left: ${(props) => props.theme.$spacingXS};
  padding-top: ${(props) => props.theme.$spacingXXS};
  padding-bottom: ${(props) => props.theme.$spacingXXS};
  text-decoration: none;
  font-family: Roboto;
  color: ${(props) =>
    props.active ? props.theme.colors.$grey900 : props.theme.colors.$grey600};
  font-weight: ${(props) =>
    props.active
      ? props.theme.fonts.$fontWeightMed
      : props.theme.fonts.$fontWeightSM};
  font-size: ${(props) => props.theme.fonts.$fontSizeMD_LG};
`;
