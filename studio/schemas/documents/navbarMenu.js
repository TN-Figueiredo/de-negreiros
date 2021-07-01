import useLanguage from "../../hooks/useLanguage";

const {
  NavbarMenu: {
    NAVBAR_MENU_TITLE,
    NAVBAR_MENU_FIELD_MAIN_TITLE,
    NAVBAR_MENU_FIELD_MAIN_DESCRIPTION,
  },
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
      description: NAVBAR_MENU_FIELD_MAIN_DESCRIPTION,
      validation: null,
      of: [
        {
          type: "navbarMenuItems",
        },
      ],
    },
  ],
  singleInstance: true,
};
