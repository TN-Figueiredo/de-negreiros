import styled from "styled-components";

export const FooterTag = styled.footer`
  width: 100vw;
  height: 270px;
  background-color: ${(props) => props.theme.colors.$grey600};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LogoSocial = styled.div``;

export const Social = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SocialIcon = styled.a`
  margin-right: ${(props) => (props.left ? "5px" : "")};
  margin-left: ${(props) => (props.left ? "" : "5px")};
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Copyright = styled.span`
  text-align: justify;
  text-justify: inter-word;
  position: relative;
  bottom: -25px;
  color: ${(props) => props.theme.colors.$grey200};
  @media (max-width: 600px) {
    text-align: center;
    text-justify: inter-word;
    padding-left: 30px;
    padding-right: 30px;
  }
`;
