import { graphql, useStaticQuery } from "gatsby";

const useSiteSettings = () => {
  const { site } = useStaticQuery(graphql`
    {
      site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
        title
        description
        keywords
        logo {
          ...Logo
        }
        footerLogo {
          ...Logo
        }
        email
        socialMedia {
          name
          url
        }
        whastapp
      }
    }
  `);
  return site;
};

export default useSiteSettings;
