import { graphql, useStaticQuery } from "gatsby";

const SanityOverlaySectionQuery = () => {
  return useStaticQuery(graphql`
    fragment OverlaySection on SanityOverlaySection {
        _key
        _type
        whatsappOverlay {
          Show
        }
    }
  `);
};

export default SanityOverlaySectionQuery;
