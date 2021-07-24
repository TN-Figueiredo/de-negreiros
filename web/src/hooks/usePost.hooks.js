import { graphql, useStaticQuery } from "gatsby";

const usePost = () => {
  const data = useStaticQuery(graphql`
    query PostQuery($slug: String) {
      sanityPost(slug: { current: { eq: $slug } }) {
        _key
        _type
        _updatedAt
        publishedAt
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
            source {
              _key
              _type
              id
              name
              url
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
  `);
  return data;
};

export default usePost;
