import useLanguage from "../../hooks/useLanguage";

const {
  NavbarMenu: {
    NAVBAR_MENU_ITEM_TITLE,
    NAVBAR_MENU_IDENTIFIER_TITLE,
    NAVBAR_MENU_IDENTIFIER_DESCRIPTION,
    NAVBAR_MENU_TITLE_TITLE,
    NAVBAR_MENU_TITLE_DESCRIPTION,
    NAVBAR_MENU_URL_TITLE,
    NAVBAR_MENU_URL_DESCRIPTION,
  },
} = useLanguage();

export default {
  type: "object",
  name: "navbarMenuItems",
  title: NAVBAR_MENU_ITEM_TITLE,
  fields: [
    {
      type: "string",
      name: "identifier",
      title: NAVBAR_MENU_IDENTIFIER_TITLE,
      description: NAVBAR_MENU_IDENTIFIER_DESCRIPTION,
      validation: (Rule) => Rule.required(),
    },
    {
      type: "string",
      name: "title",
      title: NAVBAR_MENU_TITLE_TITLE,
      description: NAVBAR_MENU_TITLE_DESCRIPTION,
      validation: (Rule) => Rule.required(),
    },
    {
      type: "string",
      name: "url",
      title: NAVBAR_MENU_URL_TITLE,
      description: NAVBAR_MENU_URL_DESCRIPTION,
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
