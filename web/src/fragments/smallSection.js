import { graphql, useStaticQuery } from "gatsby";

const SanitySmallSectionQuery = () => {
  return useStaticQuery(graphql`
    fragment SmallSection on SanitySmallSection {
      _key
      _type
      title
      background {
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
      select
      buttons {
        _key
        label
        url
      }
    }
  `);
};

export default SanitySmallSectionQuery;
