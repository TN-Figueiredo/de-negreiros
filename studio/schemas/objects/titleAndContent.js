export default {
  type: "object",
  name: "titleAndContent",
  title: "Logo",
  fields: [
    {
      type: "string",
      name: "title",
      title: "",
    },
    {
      type: "array",
      name: "content",
      title: "",
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
