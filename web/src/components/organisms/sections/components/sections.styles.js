import styled from "styled-components";

export const Content = styled.div`
  max-width: 570px;
  padding: ${(props) => props.theme.$spacingXL};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
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
  height: 190px;
  border-radius: ${(props) => props.theme.$radiusSM};
  border: 0px;
`;
