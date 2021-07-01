import { graphql, useStaticQuery } from "gatsby";

const SanityImageQuery = () => {
  return useStaticQuery(graphql`
    fragment Logo on SanityLogo {
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
    }
  `);
};

export default SanityImageQuery;
