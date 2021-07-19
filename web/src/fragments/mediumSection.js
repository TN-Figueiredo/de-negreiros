import { graphql, useStaticQuery } from "gatsby";

const SanityMediumSectionQuery = () => {
  return useStaticQuery(graphql`
    fragment MediumSection on SanityMediumSection {
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
  `);
};

export default SanityMediumSectionQuery;
