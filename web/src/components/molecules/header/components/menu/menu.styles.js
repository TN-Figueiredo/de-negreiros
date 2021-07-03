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
`;
