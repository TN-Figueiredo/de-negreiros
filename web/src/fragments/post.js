import { graphql, useStaticQuery } from "gatsby";

const SanityMediumSectionQuery = () => {
  return useStaticQuery(graphql`
    fragment Post on SanityPost {
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
  `);
};

export default SanityMediumSectionQuery;
