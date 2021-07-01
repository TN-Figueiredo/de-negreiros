import useLanguage from "../../hooks/useLanguage";

const {
  NavbarMenu: { NAVBAR_MENU_TITLE, NAVBAR_MENU_FIELD_MAIN_TITLE },
} = useLanguage();

export default {
  type: "document",
  name: "navbarMenu",
  title: NAVBAR_MENU_TITLE,
  fields: [
    {
      type: "array",
      name: "main",
      title: NAVBAR_MENU_FIELD_MAIN_TITLE,
      description: "Li",
      validation: null,
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
  singleInstance: true,
};
