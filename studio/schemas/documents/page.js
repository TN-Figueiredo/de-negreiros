import useLanguage from "../../hooks/useLanguage";
import { SchemaTypes } from "../constants";

const {
  Page: {
    PAGE_TITLE,
    PAGE_TITLE_FIELD_TITLE,
    PAGE_TITLE_FIELD_DESCRIPTION,
    PAGE_SLUG_TITLE,
    PAGE_SLUG_DESCRIPTION,
    PAGE_SECTIONS_TITLE,
    PAGE_SECTIONS_DESCRIPTION,
  },
  Form: { FORM_TITLE },
} = useLanguage();

export default {
  type: "document",
  name: "page",
  title: PAGE_TITLE,
  fields: [
    {
      type: "string",
      name: "title",
      title: PAGE_TITLE_FIELD_TITLE,
      description: PAGE_TITLE_FIELD_DESCRIPTION,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      title: PAGE_SLUG_TITLE,
      description: PAGE_SLUG_DESCRIPTION,
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    // TODO: clean up if not using
    // {
    //   type: "string",
    //   name: "template",
    //   title: "Template",
    //   hidden: false,
    //   validation: (Rule) => Rule.required(),
    //   options: {
    //     list: ["page"],
    //   },
    // },
    {
      type: "array",
      name: "sections",
      title: PAGE_SECTIONS_TITLE,
      description: PAGE_SECTIONS_DESCRIPTION,
      validation: null,
      of: [
        {
          type: "banner",
        },
        {
          type: SchemaTypes.Form,
        },
        {
          type: "smallSection",
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
