import styled from "styled-components";
import SanityImage from "gatsby-plugin-sanity-image";
import Title from "../../atoms/title";

export const Container = styled.div`
  width: 100vw;
  max-width: 1140px;
  margin: auto;
  @media (max-width: 600px) {
    max-height: 720px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isEven ? "row-reverse" : "row")};
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const PhotoContainer = styled.div`
  margin-top: ${(props) => (props.first ? props.theme.$spacingXXL : "0px")};
  margin-bottom: ${(props) => props.theme.$spacingLG};
  display: flex;
  justify-content: center;
`;

export const Photo = styled(SanityImage)`
  height: 210px;
  width: 210px;
  border-radius: 50%;
  margin-left: ${(props) => props.theme.$spacingXL};
  @media (max-width: 600px) {
    margin-left: 0px;
  }
`;

export const AuthorInfo = styled.div`
  padding-left: ${(props) => props.theme.$spacingMD_LG};
  padding-right: ${(props) => props.theme.$spacingMD_LG};
  padding-bottom: ${(props) => props.theme.$spacingMD_LG};
  width: 100%;
  align-self: center;
  @media (max-width: 600px) {
    width: 330px;
  }
`;

export const Name = styled(Title)``;

export const Description = styled.span`
  text-align: justify;
  text-justify: inter-word;
`;
