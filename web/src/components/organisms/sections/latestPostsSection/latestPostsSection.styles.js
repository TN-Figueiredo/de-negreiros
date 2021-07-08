import styled from "styled-components";
import SanityImage from "gatsby-plugin-sanity-image";
import { Link } from "gatsby";
import Title from "../../../atoms/title";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  margin-top: ${(props) => props.theme.$spacingSM};
  width: 1140px;
  @media (max-width: 600px) {
    width: 330px;
    margin-top: 0px;
    padding: ${(props) => props.theme.$spacingMD_LG};
    padding-bottom: ${(props) => (props.last ? "" : "0px")};
    padding-top: ${(props) => (props.last ? props.theme.$spacingMD : "")};
  }
`;

export const Upper = styled.div``;

export const HighLightedPostContainer = styled.div`
  margin-top: ${(props) => props.theme.$spacingLG};
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

export const Lower = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.$spacingSM};
  margin-top: ${(props) => props.theme.$spacingLG};
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

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

export const MoreArticles = styled.div`
  display: flex;
  height: 303px;
  width: 369.3px;
  margin-left: ${(props) => (props.first ? "0px" : props.theme.$spacingXS)};
  margin-right: ${(props) => (props.last ? "0px" : props.theme.$spacingXS)};
  flex-direction: column;
  @media (max-width: 600px) {
    height: 124px;
    width: 330px;
    min-height: 124px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: ${(props) => (props.first ? "0px" : props.theme.$spacingSM)};
    margin-bottom: ${(props) =>
      props.first ? props.theme.$spacingXS : props.theme.$spacingSM};
    flex-direction: row;
  }
`;

export const ArticleImage = styled(SanityImage)`
  height: 202px;
  object-fit: cover;
  border-radius: ${(props) => props.theme.$radiusSM};
  @media (max-width: 600px) {
    height: 124px;
    width: 124px;
    min-width: 124px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
`;

export const ArticleBody = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    width: 50%;
    margin-left: ${(props) => props.theme.$spacingXS};
    margin-right: ${(props) => props.theme.$spacingXS};
  }
`;

export const Category = styled.span`
  display: none;
  @media (max-width: 600px) {
    display: initial;
    font-size: ${(props) => props.theme.fonts.$fontSizeXS};
    color: ${(props) => props.theme.colors.$grey400};
    padding-bottom: ${(props) => props.theme.$spacingXXS};
  } ;
`;

export const ArticleTitle = styled.span`
  font-size: ${(props) => props.theme.fonts.$fontSizeMD};
  line-height: ${(props) => props.theme.fonts.$lineHeightSM};
  font-family: Roboto;
  font-weight: bold;
  margin-top: ${(props) => props.theme.$spacingSM};
  @media (max-width: 600px) {
    margin-top: 0px;
  }
`;

export const MoreView = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: ${(props) => props.theme.$spacingLG};
`;

export const More = styled(Link)`
  cursor: pointer;
  font-family: Roboto;
  font-size: ${(props) => props.theme.fonts.$fontSizeMD};
  font-weight: bold;
  color: ${(props) => props.theme.colors.$blue500};
`;

export const Details = styled.span`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.colors.$grey400};
  padding-top: ${(props) => props.theme.$spacingXXS};
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Author = styled(Link)`
  text-decoration: underline;
  padding-left: ${(props) => props.theme.$spacingXXS};
`;

export const Clock = styled.div`
  padding-top: 2px;
  padding-right: 4px;
`;
