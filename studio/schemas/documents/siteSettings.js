import useLanguage from "../../hooks/useLanguage";
import { validateEmail, validatePhone } from "../../lib/helpers";

const {
  SiteSettings: {
    SITE_SETTINGS_TITLE,
    SITE_SETTINGS_DESCRIPTION_TITLE,
    SITE_SETTINGS_DESCRIPTION_DESCRIPTION,
    SITE_SETTINGS_KEYWORDS_TITLE,
    SITE_SETTINGS_KEYWORDS_DESCRIPTION,
    SITE_SETTINGS_EMAIL_TITLE,
    SITE_SETTINGS_EMAIL_DESCRIPTION,
    SITE_SETTINGS_LOGO_TITLE,
    SITE_SETTINGS_FOOTER_LOGO_TITLE,
    SITE_SETTINGS_SOCIAL_MEDIA_TITLE,
    SITE_SETTINGS_WHATSAPP_TITLE,
    SITE_SETTINGS_WHATSAPP_DESCRIPTION,
    SITE_SETTINGS_WHATSAPP_MESSAGE_TITLE,
    SITE_SETTINGS_WHATSAPP_MESSAGE_DESCRIPTION,
  },
} = useLanguage();

export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: SITE_SETTINGS_TITLE,
    },
    {
      name: "description",
      type: "text",
      title: SITE_SETTINGS_DESCRIPTION_TITLE,
      description: SITE_SETTINGS_DESCRIPTION_DESCRIPTION,
    },
    {
      name: "keywords",
      type: "array",
      title: SITE_SETTINGS_KEYWORDS_TITLE,
      description: SITE_SETTINGS_KEYWORDS_DESCRIPTION,
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "email",
      type: "string",
      title: SITE_SETTINGS_EMAIL_TITLE,
      description: SITE_SETTINGS_EMAIL_DESCRIPTION,
      validation: (Rule) => validateEmail(Rule),
    },
    {
      name: "logo",
      type: "logo",
      title: SITE_SETTINGS_LOGO_TITLE,
    },
    {
      name: "footerLogo",
      type: "logo",
      title: SITE_SETTINGS_FOOTER_LOGO_TITLE,
    },
    {
      name: "socialMedia",
      type: "array",
      title: SITE_SETTINGS_SOCIAL_MEDIA_TITLE,
      of: [{ type: "socialMedia" }],
    },
    {
      name: "whatsapp",
      type: "string",
      title: SITE_SETTINGS_WHATSAPP_TITLE,
      description: SITE_SETTINGS_WHATSAPP_DESCRIPTION,
      validation: (Rule) => validatePhone(Rule),
    },
    {
      name: "whatsappMessage",
      type: "string",
      title: SITE_SETTINGS_WHATSAPP_MESSAGE_TITLE,
      description: SITE_SETTINGS_WHATSAPP_MESSAGE_DESCRIPTION,
    },
  ],
};
