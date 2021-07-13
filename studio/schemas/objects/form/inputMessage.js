import useLanguage from "../../../hooks/useLanguage";
import { SchemaTypes } from "../../constants";

const {
  Form: {
    INPUT_MESSAGE_TITLE,
    INPUT_MESSAGE_TITLE_TITLE,
    INPUT_MESSAGE_TITLE_DESCRIPTION,
    INPUT_MESSAGE_PLACEHOLDER_TITLE,
    INPUT_MESSAGE_PLACEHOLDER_DESCRIPTION,
    FORM_MAX_LENGTH_TITLE,
    FORM_MAX_LENGTH_DESCRIPTION,
  },
  General: { REQUIRED },
} = useLanguage();

export default {
  type: "object",
  name: SchemaTypes.InputMessage,
  title: INPUT_MESSAGE_TITLE,
  fields: [
    {
      type: "string",
      name: "title",
      title: INPUT_MESSAGE_TITLE_TITLE,
      description: INPUT_MESSAGE_TITLE_DESCRIPTION,
    },
    {
      type: "string",
      name: "placeholder",
      title: INPUT_MESSAGE_PLACEHOLDER_TITLE,
      description: INPUT_MESSAGE_PLACEHOLDER_DESCRIPTION,
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
