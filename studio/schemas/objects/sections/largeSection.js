import useLanguage from "../../../hooks/useLanguage";
import { SchemaTypes } from "../../constants";

const {
  SizedSection: {
    LARGE_SECTION_TITLE,
    LARGE_SECTION_TITLE_TITLE,
    SECTION_SELECT_TITLE,
    SECTION_SELECT_ITEM2,
    SECTION_SELECT_ITEM3,
    SECTION_TABBED_CONTENT_TITLE,
    SECTION_TABBED_CONTENT_DESCRIPTION,
    SECTION_TABBED_CONTENT_ERROR,
    SECTION_CONTENT_TITLE,
    SECTION_CONTENT_DESCRIPTION,
    SECTION_CONTENT_ERROR,
  },
  Form: { FORM_TITLE },
} = useLanguage();

export default {
  type: "object",
  name: "largeSection",
  title: LARGE_SECTION_TITLE,
  fields: [
    {
      type: "string",
      name: "title",
      title: LARGE_SECTION_TITLE_TITLE,
    },
    {
      type: "string",
      name: "select",
      title: SECTION_SELECT_TITLE,
      options: {
        list: [
          { title: SECTION_SELECT_ITEM2, value: "content" },
          { title: SECTION_SELECT_ITEM3, value: "tabbedContent" },
        ],
        layout: "dropdown", // <-- defaults to 'dropdown'
      },
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
            (section) => section._type === "largeSection"
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
    {
      type: "tabbedContent",
      name: "tabbedContent",
      title: SECTION_TABBED_CONTENT_TITLE,
      description: SECTION_TABBED_CONTENT_DESCRIPTION,
      validation: (Rule) =>
        Rule.custom((content, context) => {
          const {
            document: { sections },
          } = context;

          const section = sections.filter(
            (section) => section._type === "largeSection"
          );
          const selection = section[0].select;
          const hasContentSelected = section[0].content.length > 0;

          if (selection === undefined) {
            return SECTION_CONTENT_ERROR;
          } else {
            if (selection !== "tabbedContent" && hasContentSelected) {
              return SECTION_TABBED_CONTENT_ERROR;
            } else {
              return true;
            }
          }
        }),
      of: [{ type: "titleAndContent" }, { type: "youtube" }],
    },
    {
      type: SchemaTypes.Form,
      name: "contact",
      title: FORM_TITLE,
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
