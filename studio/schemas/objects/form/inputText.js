import useLanguage from "../../../hooks/useLanguage";
import { SchemaTypes } from "../../constants";

const {
  Form: {
    TEXT_FIELD_TITLE,
    TEXT_FIELD_TITLE_TITLE,
    TEXT_FIELD_TITLE_DESCRIPTION,
    TEXT_FIELD_PLACEHOLDER_TITLE,
    TEXT_FIELD_PLACEHOLDER_DESCRIPTION,
    FORM_MAX_LENGTH_TITLE,
    FORM_MAX_LENGTH_DESCRIPTION,
  },
  General: { REQUIRED },
} = useLanguage();

export default {
  type: "object",
  name: SchemaTypes.inputText,
  title: TEXT_FIELD_TITLE,
  fields: [
    {
      type: "string",
      name: "title",
      title: TEXT_FIELD_TITLE_TITLE,
      description: TEXT_FIELD_TITLE_DESCRIPTION,
    },
    {
      type: "string",
      name: "placeholder",
      title: TEXT_FIELD_PLACEHOLDER_TITLE,
      description: TEXT_FIELD_PLACEHOLDER_DESCRIPTION,
    },
    {
      type: "number",
      name: "maxLength",
      title: FORM_MAX_LENGTH_TITLE,
      description: FORM_MAX_LENGTH_DESCRIPTION,
    },
    {
      type: "boolean",
      name: "required",
      title: REQUIRED,
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
