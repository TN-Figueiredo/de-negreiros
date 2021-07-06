import useLanguage from "../../../hooks/useLanguage";

const {
  General: { TITLE, LATEST_POSTS_SECTION_TITLE },
} = useLanguage();

export default {
  type: "object",
  name: "latestPostsSection",
  title: LATEST_POSTS_SECTION_TITLE,
  fields: [
    {
      type: "string",
      name: "title",
      title: TITLE,
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
