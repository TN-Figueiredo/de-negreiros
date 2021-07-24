import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 1140px;
  margin: auto;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const PostContainer = styled.div`
  padding-top: 30px;
  width: 775px;
  background-color: cyan;
  display: flex;
  flex-direction: column;
  margin-right: ${(props) => props.theme.$spacingXS};
`;

export const MorePosts = styled.div`
  width: 349px;
  margin-right: ${(props) => props.theme.$spacingXS};
  background-color: darkblue;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderPostInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderShare = styled.div`
  margin-left: auto;
  margin-top: auto;
  display: flex;
  align-items: center;
  height: 50%;
`;

export const Title = styled.span`
  font-family: Roboto;
  font-color: ${(props) => props.theme.colors.$grey900};
  font-size: ${(props) => props.theme.fonts.$fontSizeLG};
  font-weight: bold;
  padding-bottom: ${(props) => props.theme.$spacingMD_LG};
`;

export const Category = styled.span`
  color: ${(props) => props.theme.colors.$blue500};
  font-size: ${(props) => props.theme.fonts.$fontSizeMD};
  padding-bottom: ${(props) => props.theme.$spacingXXS};
`;

export const Time = styled.span`
  font-size: ${(props) => props.theme.fonts.$fontSizeXS};
`;
