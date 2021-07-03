import styled from "styled-components";
import SanityImage from "gatsby-plugin-sanity-image";

export const Container = styled.div`
  width: 100vw;
  @media (max-width: 600px) {
    height: 530px;
  }
`;

export const EndWave = styled.div`
  /* width: 1140px;
  height: 700px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column-reverse; */
`;

export const StyledSanityImage = styled(SanityImage)`
  max-height: 700px;
  object-fit: cover;
  z-index: -100;
  @media (max-width: 600px) {
    height: 530px;
  }
`;

export const Overlay = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.47);
  @media (max-width: 600px) {
    height: 530px;
  }
`;
