import useLanguage from "../../hooks/useLanguage";

const {
  NavbarMenu: {
    NAVBAR_MENU_TITLE,
    NAVBAR_DEFAULT_TITLE,
    NAVBAR_MENU_FIELD_MAIN_TITLE,
    NAVBAR_MENU_FIELD_MAIN_DESCRIPTION,
  },
} = useLanguage();

export default {
  type: "document",
  name: "navbarMenu",
  title: NAVBAR_MENU_TITLE,
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      type: "string",
      name: "title",
      validation: null,
      hidden: true,
    },
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
  preview: {
    select: {
      title: "title",
    },
  },
  initialValue: {
    title: NAVBAR_DEFAULT_TITLE,
  },
};
