import { graphql, useStaticQuery } from "gatsby";

const SanityBannerQuery = () => {
  return useStaticQuery(graphql`
    fragment Banner on SanityBanner {
      _key
      _type
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
      titleAndContent {
        _key
        _type
        title
        block {
          _key
          _type
          children {
            _key
            _type
            marks
            text
          }
        }
      }
      buttons {
        label
        url
      }
    }
  `);
};

export default SanityBannerQuery;
