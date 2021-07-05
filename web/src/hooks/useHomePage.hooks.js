import { graphql, useStaticQuery } from "gatsby";

const useHomePage = () => {
  const { sanityHomePage } = useStaticQuery(graphql`
    {
      sanityHomePage {
        title
        sections {
          ... on SanityBanner {
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
            block {
              _type
              children {
                _key
                _type
                marks
                text
              }
            }
            buttons {
              label
              url
            }
          }
          ... on SanitySmallSection {
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
          ... on SanityMediumSection {
            _key
            _type
            select
            title
            content {
              ... on SanityTitleAndContent {
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
              ... on SanityYoutube {
                _key
                _type
                url
              }
            }
          }
        }
      }
    }
  `);
  return sanityHomePage;
};

export default useHomePage;
