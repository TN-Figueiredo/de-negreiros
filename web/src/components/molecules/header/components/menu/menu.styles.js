import styled from "styled-components";
import { Link } from "gatsby";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 10;
  padding-bottom: 25px;
  margin-right: 90px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const LinkItem = styled(Link)`
  padding-right: 30px;
  text-decoration: none;
  font-family: Roboto;
  color: ${(props) => props.theme.colors.$grey900};
  font-weight: ${(props) =>
    props.active
      ? props.theme.fonts.$fontWeightMed
      : props.theme.fonts.$fontWeightSM};
  font-size: ${(props) => props.theme.fonts.$fontSizeMD_LG};
`;
