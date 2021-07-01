import useLanguage from "../../hooks/useLanguage";

const {
  Page: { PAGE_TITLE, PAGE_TITLE_FIELD_TITLE, PAGE_TITLE_FIELD_DESCRIPTION },
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
      title: "Sections",
      description: "Home page sections.",
      validation: null,
      of: [
        {
          type: "banner",
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
