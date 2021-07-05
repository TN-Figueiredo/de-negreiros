import useLanguage from "../../hooks/useLanguage";

const {
  TitleAndContent: {
    TITLE_AND_CONTENT_TITLE,
    TITLE_AND_CONTENT_TITLE_TITLE,
    TITLE_AND_CONTENT_CONTENT,
  },
} = useLanguage();

export default {
  type: "object",
  name: "titleAndContent",
  title: TITLE_AND_CONTENT_TITLE,
  fields: [
    {
      type: "string",
      name: "title",
      title: TITLE_AND_CONTENT_TITLE_TITLE,
    },
    {
      type: "array",
      name: "block",
      title: TITLE_AND_CONTENT_CONTENT,
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
