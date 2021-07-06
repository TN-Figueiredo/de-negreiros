import styled from "styled-components";

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

export const Upper = styled.div`
  background-color: red;
`;
export const Lower = styled.div``;
export const HighLightedPost = styled.div``;
export const MoreArticles = styled.div``;
