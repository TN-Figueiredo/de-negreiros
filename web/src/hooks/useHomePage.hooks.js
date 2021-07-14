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
          ... on SanityLatestPostsSection {
            _key
            _type
            title
          }
          ... on SanityLargeSection {
            _key
            _type
            form {
              _key
              _type
              title
              backgroundColor
              submit
              fields {
                ... on SanityInputText {
                  _key
                  _type
                  placeholder
                  title
                  maxLength
                  required
                }
                ... on SanityInputMessage {
                  _key
                  _type
                  placeholder
                  title
                  maxLength
                  required
                }
                ... on SanityInputSelect {
                  _key
                  _type
                  options
                  title
                  required
                }
              }
            }
            tabbedContent {
              _key
              _type
              backgroundColor
              title
              content {
                _key
                _rawBlock
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
            }
            select
            content {
              ... on SanityTitleAndContent {
                _key
                _type
                block {
                  children {
                    _key
                    _type
                    text
                    marks
                  }
                  _key
                  _type
                }
                title
              }
              ... on SanityYoutube {
                _key
                _type
                description
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
