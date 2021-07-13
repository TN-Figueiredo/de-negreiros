import useLanguage from "../../hooks/useLanguage";

const {
  TabbedContent: {
    TABBED_CONTENT_TITLE,
    TABBED_CONTENT_TITLE_TITLE,
    TABBED_CONTENT_TITLE_DESCRIPTION,
  },
  TitleAndContent: { TITLE_AND_CONTENT_CONTENT },
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
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
