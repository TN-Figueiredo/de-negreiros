import { graphql, useStaticQuery } from "gatsby";

const useHomePage = () => {
  const { sanityHomePage } = useStaticQuery(graphql`
    {
      sanityHomePage {
        title
        sections {
          ... on SanityBanner {
            ...Banner
          }
          ... on SanitySmallSection {
            ...SmallSection
          }
          ... on SanityMediumSection {
            ...MediumSection
          }
          ... on SanityLatestPostsSection {
            ...LatestPostSection
          }
          ... on SanityLargeSection {
            ...LargeSection
          }
        }
      }
    }
  `);
  return sanityHomePage;
};

export default useHomePage;
