import { graphql, useStaticQuery } from "gatsby";

const useNavbarMenu = () => {
  const {
    sanityNavbarMenu: { main },
  } = useStaticQuery(graphql`
    {
      sanityNavbarMenu {
        main {
          identifier
          title
          url
        }
      }
    }
  `);
  return main;
};

export default useNavbarMenu;
