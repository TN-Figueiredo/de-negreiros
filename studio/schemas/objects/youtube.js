import { validateYoutubeUrl } from "../../lib/helpers";

export default {
  type: "object",
  name: "youtube",
  title: "YouTube",
  fields: [
    {
      type: "url",
      name: "url",
      title: "URL",
    },
    {
      type: "string",
      name: "description",
      title: "description",
    },
  ],
  preview: {
    select: {
      title: "description",
    },
  },
};
