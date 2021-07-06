import React from "react";
import PropTypes from "prop-types";
import Title from "../../../atoms/title";
import useTheme from "../../../../hooks/useTheme.hooks";
import useLatestPosts from "../../../../hooks/useLatestPosts.hooks";

import {
  Container,
  Content,
  Upper,
  Lower,
  HighLightedPost,
  MoreArticles,
} from "./latestPostsSection.styles";

const renderHighLighted = (post) => {};

const renderLatestPosts = (posts) => {
  const highlight = posts.splice(0, 3);

  return (
    <>
      <Upper>
        <HighLightedPost>Post 1</HighLightedPost>
        <MoreArticles>Post 2</MoreArticles>
      </Upper>
      <Lower></Lower>
    </>
  );
};

const LatestPostsSection = ({ title }) => {
  const theme = useTheme();
  const latestPosts = useLatestPosts();
  return (
    <Container>
      <Content>
        <Title fontSize={theme.fonts.$fontSizeLG} color={theme.colors.$blue500}>
          {title}
        </Title>
        {renderLatestPosts(latestPosts)}
      </Content>
    </Container>
  );
};

LatestPostsSection.propTypes = {};

export default LatestPostsSection;
