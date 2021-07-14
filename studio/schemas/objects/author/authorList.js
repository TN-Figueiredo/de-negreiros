export default {
  name: "authorList",
  type: "object",
  title: "Author list",
  fields: [
    {
      type: "array",
      name: "authors",
      of: [
        {
          type: "authorReference",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "authors.name",
    },
  },
};
