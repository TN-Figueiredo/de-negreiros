import useLanguage from "../../../hooks/useLanguage";

const {
  SizedSection: {
    SMALL_SECTION_TITLE,
    SMALL_SECTION_TITLE_TITLE,
    SMALL_SECTION_BUTTONS_TITLE,
    SMALL_SECTION_BUTTONS_DESCRIPTION,
    SMALL_SECTION_BUTTONS_ERROR,
  },
} = useLanguage();

export default {
  type: "object",
  name: "smallSection",
  title: SMALL_SECTION_TITLE,
  fields: [
    {
      type: "string",
      name: "title",
      title: SMALL_SECTION_TITLE_TITLE,
    },
    {
      type: "string",
      name: "select",
      title: "Select",
      options: {
        list: [
          { title: "Buttons", value: "button" },
          { title: "Content", value: "content" },
        ],
        layout: "dropdown", // <-- defaults to 'dropdown'
      },
    },
    {
      type: "array",
      name: "buttons",
      title: SMALL_SECTION_BUTTONS_TITLE,
      description: SMALL_SECTION_BUTTONS_DESCRIPTION,
      validation: (Rule) =>
        Rule.custom((buttons, context) => {
          const {
            document: { sections },
          } = context;

          const isSelected = sections[1].hasOwnProperty("select");
          const selection = sections[1].select;
          if (isSelected && selection === "button") {
            return true;
          } else {
            return SMALL_SECTION_BUTTONS_ERROR;
          }
        }),
      of: [{ type: "button" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
