import styled from "styled-components";

export const Content = styled.div`
  width: 558px;
  display: flex;
  padding-left: ${(props) => (props.index === 0 ? "" : props.theme.$spacingSM)};
  padding-right: ${(props) =>
    props.index === 0 ? props.theme.$spacingSM : ""};
  padding-top: ${(props) => props.theme.$spacingMD};
  padding-bottom: ${(props) => props.theme.$spacingMD};
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    width: 330px;
    padding: ${(props) => props.theme.$spacingMD_LG};
    padding-bottom: ${(props) => (props.last ? "" : "0px")};
    padding-top: ${(props) => (props.last ? props.theme.$spacingMD : "")};
  }
`;

// TODO: CLEAN UP BLOCK CONTENT AFTERWARDS
export const BlockContentJustified = styled.span`
  text-align: justify;
  text-justify: inter-word;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  @media (min-width: 601px) {
    margin-right: ${(props) => (props.first ? "7px" : "0px")};
    margin-left: ${(props) => (props.first ? "0px" : "7px")};
  }
  @media (max-width: 600px) {
    margin-bottom: ${(props) => (props.first ? "7px" : "0px")};
    margin-top: ${(props) => (props.first ? "0px" : "7px")};
  }
`;

export const YoutubeIframe = styled.iframe`
  height: 330px;
  width: 550px;
  border-radius: ${(props) => props.theme.$radiusSM};
  border: 0px;
  @media (max-width: 600px) {
    height: 185px;
  }
`;
