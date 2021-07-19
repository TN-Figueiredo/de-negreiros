import useLanguage from "../../hooks/useLanguage";

const {
  TabbedContent: {
    TABBED_CONTENT_TITLE,
    TABBED_CONTENT_TITLE_TITLE,
    TABBED_CONTENT_TITLE_DESCRIPTION,
  },
  TitleAndContent: { TITLE_AND_CONTENT_CONTENT },
  General: {
    BACKGROUND_COLOR_TITLE,
    BACKGROUND_COLOR_OPTION_1,
    BACKGROUND_COLOR_OPTION_2,
  },
} = useLanguage();

export default {
  type: "object",
  name: "tabbedContent",
  title: TABBED_CONTENT_TITLE,
  fields: [
    {
      type: "string",
      name: "title",
      title: TABBED_CONTENT_TITLE_TITLE,
      description: TABBED_CONTENT_TITLE_DESCRIPTION,
    },
    {
      type: "array",
      name: "content",
      title: TITLE_AND_CONTENT_CONTENT,
      of: [{ type: "titleAndContent" }],
    },
    {
      type: "string",
      name: "backgroundColor",
      title: BACKGROUND_COLOR_TITLE,
      options: {
        list: [
          {
            title: BACKGROUND_COLOR_OPTION_1,
            value: BACKGROUND_COLOR_OPTION_1.toLowerCase(),
          },
          {
            title: BACKGROUND_COLOR_OPTION_2,
            value: BACKGROUND_COLOR_OPTION_2.toLowerCase(),
          },
        ],
        layout: "radio",
      },
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
