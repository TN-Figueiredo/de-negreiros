import styled from "styled-components";

export const HeaderTag = styled.header`
  max-width: 1140px;
  margin: auto;
  height: 90px;
`;

export const Navbar = styled.nav`
  position: relative;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;
  height: 23px;
  width: 23px;
  position: absolute;
  left: 36px;
  top: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 600px) {
    display: flex;
  }
`;

export const LogoContainer = styled.div`
  width: 150px;
  margin-left: 85px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  cursor: pointer;
  @media (max-width: 600px) {
    margin-left: 0px;
    margin-bottom: 0px;
  }
`;

export const SvgContainer = styled.div`
  position: relative;
  top: -100px;
`;
