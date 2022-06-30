import useLanguage from "../../hooks/useLanguage";
import { SchemaTypes } from "../constants";

const {
  HomePage: {
    HOMEPAGE_TITLE,
    HOMEPAGE_SECTIONS_TITLE,
    HOMEPAGE_SECTIONS_DESCRIPTION,
  },
} = useLanguage();

export default {
  type: "document",
  name: "homePage",
  title: HOMEPAGE_TITLE,
  fields: [
    {
      type: "string",
      name: "title",
      validation: null,
      hidden: true,
    },
    {
      type: "array",
      name: "sections",
      title: HOMEPAGE_SECTIONS_TITLE,
      description: HOMEPAGE_SECTIONS_DESCRIPTION,
      validation: null,
      of: [
        { type: "banner" },
        { type: "smallSection" },
        { type: "mediumSection" },
        { type: "largeSection" },
        { type: "latestPostsSection" },
        { type: SchemaTypes.OverlaySection }
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
  initialValue: {
    title: HOMEPAGE_TITLE,
  },
};
