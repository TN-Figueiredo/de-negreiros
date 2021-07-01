import useLanguage from "../../hooks/useLanguage";

const {
  Button: {
    BUTTON_TITLE,
    BUTTON_LABEL_TITLE,
    BUTTON_LABEL_DESCRIPTION,
    BUTTON_URL_TITLE,
  },
} = useLanguage();

export default {
  type: "object",
  name: "button",
  title: BUTTON_TITLE,
  fields: [
    {
      type: "string",
      name: "label",
      title: BUTTON_LABEL_TITLE,
      description: BUTTON_LABEL_DESCRIPTION,
      validation: (Rule) => Rule.required(),
    },
    {
      type: "string",
      name: "url",
      title: BUTTON_URL_TITLE,
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "label",
    },
  },
};
