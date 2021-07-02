import { graphql, useStaticQuery } from "gatsby";

const useHomePage = () => {
  const {
    allSanityHomePage: { edges },
  } = useStaticQuery(graphql`
    {
      allSanityHomePage {
        edges {
          node {
            title
            sections {
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
              bannerText {
                children {
                  text
                  marks
                }
              }
              buttons {
                label
                url
              }
            }
          }
        }
      }
    }
  `);
  return edges[0].node;
};

export default useHomePage;
