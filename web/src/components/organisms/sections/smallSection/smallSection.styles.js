import styled from "styled-components";
import SanityImage from "gatsby-plugin-sanity-image";

export const Container = styled.div`
  height: 225px;
  background-color: ${(props) =>
    props.background.asset ? "" : props.theme.colors.$blue500};
`;

export const Overlay = styled.div`
  width: 100vw;
  position: absolute;
  height: 225px;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.47);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
  }
`;

export const StyledSanityImage = styled(SanityImage)`
  position: absolute;
  width: 100vw;
  height: 225px;
  object-fit: cover;
  z-index: -100;
  @media (max-width: 600px) {
  }
`;
