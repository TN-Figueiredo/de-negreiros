import useLanguage from "../../hooks/useLanguage";
import { validateUrl } from "../../lib/helpers";

const {
  SocialMedia: {
    SOCIAL_MEDIA_TITLE,
    SOCIAL_MEDIA_NAME_TITLE,
    SOCIAL_MEDIA_NAME_DESCRIPTION,
    SOCIAL_MEDIA_URL_TITLE,
    SOCIAL_MEDIA_URL_DESCRIPTION,
  },
} = useLanguage();

export default {
  name: "socialMedia",
  type: "object",
  title: SOCIAL_MEDIA_TITLE,
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "name",
      type: "string",
      title: SOCIAL_MEDIA_NAME_TITLE,
      description: SOCIAL_MEDIA_NAME_DESCRIPTION,
    },
    {
      name: "url",
      type: "url",
      title: SOCIAL_MEDIA_URL_TITLE,
      description: SOCIAL_MEDIA_URL_DESCRIPTION,
      validation: (Rule) => Rule.required(),
    },
  ],
};
