import styled from "styled-components";

export const HeaderTag = styled.header`
  max-width: 1140px;
  margin: auto;
  height: 90px;
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-self: baseline;
  height: 100px;
  width: 1140px;
  top: 0px;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  z-index: 10;
`;

export const SvgContainer = styled.div`
  position: relative;
  top: -100px;
`;
