import styled from "styled-components";
import SanityImage from "gatsby-plugin-sanity-image";

export const Container = styled.div`
  width: 100vw;
  @media (max-width: 600px) {
    height: 530px;
  }
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

export const ContentContainer = styled.div`
  height: 700px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  @media (max-width: 600px) {
    height: 530px;
  }
`;

export const Content = styled.span`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const Text = styled.span`
  font-size: ${(props) => props.theme.fonts.$fontSizeXL};
  font-weight: ${(props) => props.theme.fonts.$fontWeightMed};
  color: ${(props) => props.theme.colors.$grey000};
  line-height: ${(props) => props.theme.fonts.$lineHeightLG};
  @media (max-width: 600px) {
    font-size: ${(props) => props.theme.fonts.$fontSizeLG};
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  margin-bottom: ${(props) => (props.upper ? "7px" : "0px")};
  margin-top: ${(props) => (props.upper ? "0px" : "7px")};
`;
