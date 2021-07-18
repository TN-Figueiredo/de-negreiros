import { graphql, useStaticQuery } from "gatsby";

const SanityLatestPostsSectionQuery = () => {
  return useStaticQuery(graphql`
    fragment LatestPostSection on SanityLatestPostsSection {
      _key
      _type
      title
    }
  `);
};

export default SanityLatestPostsSectionQuery;
