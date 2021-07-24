import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/organisms/layout";
import renderSections from "../components/organisms/sections";
import usePost from "../hooks/usePost.hooks";

import {
  Container,
  PostContainer,
  MorePosts,
  HeaderInfo,
  HeaderPostInfo,
  HeaderShare,
  Title,
  Category,
  Time,
} from "./article.styles";
const ArticleTemplate = ({ data: { sanityPost: post } }) => {
  const { title, categories } = post;
  console.log("post", post);
  return (
    <Layout>
      <Container>
        <PostContainer>
          <HeaderInfo>
            <HeaderPostInfo>
              <Title>{title}</Title>
              <Category>{categories[0].title.toUpperCase()}</Category>
              <Time>02/07/2021 - 12H17 (ATUALIZADO EM 02/07/2021 - 12H18)</Time>
            </HeaderPostInfo>
            <HeaderShare>Share post</HeaderShare>
          </HeaderInfo>
        </PostContainer>
        <MorePosts></MorePosts>
      </Container>
    </Layout>
  );
};

export const queryPost = graphql`
  query PostQuery2($slug: String) {
    sanityPost(slug: { current: { eq: $slug } }) {
      ...Post
    }
  }
`;

ArticleTemplate.propTypes = {};

export default ArticleTemplate;
