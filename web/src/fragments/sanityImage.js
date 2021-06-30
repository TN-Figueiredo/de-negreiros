import { graphql, useStaticQuery } from "gatsby";

const SanityImageQuery = () => {
  return useStaticQuery(graphql`
    fragment SanityImage on SanityMainImage {
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
      }
    }
  `);
};

export default SanityImageQuery;
