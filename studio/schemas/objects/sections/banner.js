import useLanguage from "../../../hooks/useLanguage";

const {
  Banner: {
    BANNER_TITLE,
    BANNER_BACKGROUND_TITLE,
    BANNER_BACKGROUND_DESCRIPTION,
    BANNER_TEXT_TITLE,
    BANNER_TEXT_DESCRIPTION,
    BANNER_BUTTONS_TITLE,
    BANNER_BUTTONS_DESCRIPTION,
  },
} = useLanguage();

export default {
  type: "object",
  name: "banner",
  title: BANNER_TITLE,
  fields: [
    {
      type: "mainImage",
      name: "background",
      title: BANNER_BACKGROUND_TITLE,
      description: BANNER_BACKGROUND_DESCRIPTION,
    },
    {
      type: "excerptPortableText",
      name: "bannerText",
      title: BANNER_TEXT_TITLE,
      description: BANNER_TEXT_DESCRIPTION,
    },
    {
      type: "array",
      name: "buttons",
      title: BANNER_BUTTONS_TITLE,
      description: BANNER_BUTTONS_DESCRIPTION,
      of: [
        {
          type: "button",
        },
      ],
    },
  ],
  preview: {
    select: {
      media: "background",
      title: "background.caption",
    },
  },
};
