import useLanguage from "../../../hooks/useLanguage";

const {
  SizedSection: {
    MEDIUM_SECTION_TITLE,
    MEDIUM_SECTION_TITLE_TITLE,
    SECTION_SELECT_TITLE,
    SECTION_SELECT_ITEM1,
    SECTION_SELECT_ITEM2,
    SECTION_BUTTONS_TITLE,
    SECTION_BUTTONS_DESCRIPTION,
    SECTION_BUTTONS_ERROR,
    SECTION_CONTENT_TITLE,
    SECTION_CONTENT_DESCRIPTION,
    SECTION_CONTENT_ERROR,
  },
} = useLanguage();

export default {
  type: "object",
  name: "mediumSection",
  title: MEDIUM_SECTION_TITLE,
  fields: [
    {
      type: "string",
      name: "title",
      title: MEDIUM_SECTION_TITLE_TITLE,
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
            (section) => section._type === "mediumSection"
          );
          const selection = section[0].select;
          const hasButtonSelected = section[0].buttons.length > 0;

          if (selection === undefined) {
            return SECTION_BUTTONS_ERROR;
          } else {
            if (selection !== "button" && hasButtonSelected) {
              return SECTION_BUTTONS_ERROR;
            } else {
              return true;
            }
          }
        }),
      of: [{ type: "button" }],
    },
    {
      type: "array",
      name: "content",
      title: SECTION_CONTENT_TITLE,
      description: SECTION_CONTENT_DESCRIPTION,
      validation: (Rule) =>
        Rule.custom((content, context) => {
          const {
            document: { sections },
          } = context;

          const section = sections.filter(
            (section) => section._type === "mediumSection"
          );
          const selection = section[0].select;
          const hasContentSelected = section[0].content.length > 0;

          if (selection === undefined) {
            return SECTION_CONTENT_ERROR;
          } else {
            if (selection !== "content" && hasContentSelected) {
              return SECTION_CONTENT_ERROR;
            } else {
              return true;
            }
          }
        }),
      of: [{ type: "titleAndContent" }, { type: "youtube" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
