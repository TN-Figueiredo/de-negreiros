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

export const TabbedContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 700px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.$blue500};
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const ContentContainer = styled.div`
  width: 555px;
  height: 100%;
  padding-left: ${(props) => (props.first ? "" : "15px")};
  padding-right: ${(props) => (props.first ? "15px" : "")};
  @media (max-width: 600px) {
    width: 334px;
    padding-left: 20px;
    padding-right: 0px;
    display: ${(props) => (!props.first ? "none" : "")};
  }
`;

export const TabbedContent = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const TabView = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: ${(props) => props.theme.$spacingLG};
  padding-bottom: ${(props) => props.theme.$spacingXS};
  text-align: center;
`;

export const Tab = styled.div`
  display: flex;
  flex: ${(props) => (props.total ? `1/${props.total}` : "0px")};
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.active ? props.theme.colors.$grey300 : props.theme.colors.$grey000};
  border-top-left-radius: ${(props) =>
    props.first ? props.theme.$radiusSM : "0px"};
  border-bottom-left-radius: ${(props) =>
    props.first ? props.theme.$radiusSM : "0px"};
  border-top-right-radius: ${(props) =>
    props.last ? props.theme.$radiusSM : "0px"};
  border-bottom-right-radius: ${(props) =>
    props.last ? props.theme.$radiusSM : "0px"};
  margin-left: ${(props) => (props.first ? "0px" : "1px")};
  font-family: Roboto;
  font-weight: bold;
  color: ${(props) => props.theme.colors.$blue500};
  cursor: pointer;
  @media (max-width: 600px) {
    height: 40px;
    font-size: ${(props) => props.theme.fonts.$fontSizeSM};
    padding-left: ${(props) => props.theme.$spacingXXS};
    padding-right: ${(props) => props.theme.$spacingXXS};
  }
`;

export const TabText = styled.span`
  text-align: justify;
  text-justify: inter-word;
  font-size: ${(props) => props.theme.fonts.$fontSizeMD};
  color: ${(props) => props.theme.colors.$grey000};
`;
