import useLanguage from "../../../hooks/useLanguage";

const {
  SizedSection: {
    SMALL_SECTION_TITLE,
    SMALL_SECTION_TITLE_TITLE,
    SECTION_SELECT_TITLE,
    SECTION_SELECT_ITEM1,
    SECTION_SELECT_ITEM2,
    SECTION_BUTTONS_TITLE,
    SECTION_BUTTONS_DESCRIPTION,
    SECTION_BUTTONS_ERROR,
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
      title: SECTION_SELECT_TITLE,
      options: {
        list: [
          { title: SECTION_SELECT_ITEM1, value: "button" },
          { title: SECTION_SELECT_ITEM2, value: "content" },
        ],
        layout: "dropdown", // <-- defaults to 'dropdown'
      },
    },
    {
      type: "array",
      name: "buttons",
      title: SECTION_BUTTONS_TITLE,
      description: SECTION_BUTTONS_DESCRIPTION,
      validation: (Rule) =>
        Rule.custom((buttons, context) => {
          const {
            document: { sections },
          } = context;

          const section = sections.filter(
            (section) => section._type === "smallSection"
          );

          const isSelected = section[0].hasOwnProperty("select");
          const selection = section[0].select;
          if (isSelected && selection === "button") {
            return true;
          } else {
            return SECTION_BUTTONS_ERROR;
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
