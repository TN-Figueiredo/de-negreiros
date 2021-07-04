export default {
  type: "object",
  name: "titleAndContent",
  title: "Title and Content",
  fields: [
    {
      type: "string",
      name: "title",
      title: "title",
    },
    {
      type: "array",
      name: "content",
      title: "content",
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
