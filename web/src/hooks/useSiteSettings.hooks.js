import { graphql, useStaticQuery } from "gatsby";

const useSiteSettings = () => {
  return useStaticQuery(graphql`
    {
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        title
        description
        keywords
        logo {
          ...Logo
        }
      }
    }
  `);
};

export default useSiteSettings;
