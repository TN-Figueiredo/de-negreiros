import React from "react";
import { graphql } from "gatsby";
import Layout from "../containers/layout";
import Logo from "../../assets/logo.png";
import Construcao from "../../assets/construcao.png";

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
    <div
      style={{
        height: "98.5vh",
        textAlign: "center",
        marginTop: "30vh",
      }}
    >
      <div className="">
        <img style={{}} src={Logo} width="275" />
      </div>
      <div className="">
        <img style={{}} src={Construcao} width="600" />
      </div>
    </div>
  );
};

export default IndexPage;
