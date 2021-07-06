import { graphql, useStaticQuery } from "gatsby";

const useLatestPosts = () => {
  const {
    allSanityPost: { edges },
  } = useStaticQuery(graphql`
    {
      allSanityPost(limit: 6, sort: { fields: publishedAt, order: DESC }) {
        edges {
          node {
            _key
            _type
            _updatedAt(fromNow: true)
            publishedAt(fromNow: true)
            title
            authors {
              author {
                name
              }
            }
            mainImage {
              _key
              _type
              caption
              alt
              _rawAsset
              _rawHotspot
              _rawCrop
            }
          }
        }
      }
    }
  `);
  return edges;
};

export default useLatestPosts;
