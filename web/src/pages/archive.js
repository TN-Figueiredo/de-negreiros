import Layout from "../containers/layout";
import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";

export const query = graphql`
  query ArchivePageQuery {
    posts: allSanityPost(
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

const ArchivePage = () => {
  return <Layout></Layout>;
};

export default ArchivePage;
