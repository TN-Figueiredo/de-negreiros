import { graphql, useStaticQuery } from "gatsby";

const SanityTopicsListSectionQuery = () => {
    return useStaticQuery(graphql`
    fragment TopicsListSection on SanityTopicsListSection {
        _key
        _type
        show
        title
    }
  `);
};

export default SanityTopicsListSectionQuery;
