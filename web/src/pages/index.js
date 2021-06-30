import React from "react";
import { graphql } from "gatsby";
import Logo from "../../assets/logo.png";
import Construcao from "../../assets/construcao.png";

import styled from "styled-components";

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = () => {
  return (
    <StyledContainer>
      <img src={Logo} width="185" />
      <img src={Construcao} width="300" />
    </StyledContainer>
  );
};

export default IndexPage;

const StyledContainer = styled.div`
  height: 98.5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
