import styled from "styled-components";
import SanityImage from "gatsby-plugin-sanity-image";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 1140px;
  @media (max-width: 600px) {
    width: 330px;
    padding: ${(props) => props.theme.$spacingMD_LG};
    padding-bottom: ${(props) => (props.last ? "" : "0px")};
    padding-top: ${(props) => (props.last ? props.theme.$spacingMD : "")};
  }
`;

export const Upper = styled.div``;

export const HighLightedPostContainer = styled.div`
  width: 775px;
  height: 460px;
  @media (max-width: 600px) {
    width: 330px;
    height: 365px;
  }
`;

export const HighLightedPost = styled.div`
  height: 425px;
  @media (max-width: 600px) {
    width: 330px;
    height: 330px;
  }
`;

export const HighLightedImage = styled(SanityImage)`
  height: 425px;
  width: 775px;
  object-fit: cover;
  @media (max-width: 600px) {
    width: 330px;
    height: 330px;
  }
`;

export const Lower = styled.div``;
export const MoreArticles = styled.div``;

export const LeftArrowContainer = styled.div`
  cursor: pointer;
  position: absolute;
  height: 425px;
  left: 70px;
  @media (max-width: 600px) {
    height: 330px;
  }
`;

export const LeftArrow = styled.div`
  position: relative;
  top: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

export const RightArrowContainer = styled.div`
  cursor: pointer;
  position: absolute;
  height: 425px;
  right: 30px;
  top: 0px;
  @media (max-width: 600px) {
    height: 330px;
  }
`;

export const RightArrow = styled.div`
  position: relative;
  top: 50%;
  bottom: 100%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;
