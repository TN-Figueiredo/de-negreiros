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
            categories {
              title
            }
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
              asset {
                _id
                metadata {
                  _key
                  _type
                  lqip
                  hasAlpha
                  isOpaque
                  _rawLocation
                  _rawDimensions
                  _rawPalette
                }
              }
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
            }
            excerpt {
              children {
                _key
                _type
                text
                marks
              }
              _key
              _type
            }
            slug {
              current
            }
          }
        }
      }
    }
  `);
  return edges;
};

export default useLatestPosts;
