import useLanguage from "../../../hooks/useLanguage";
import { SchemaTypes } from "../../constants";

const {
  Form: {
    INPUT_FIELD_TITLE,
    INPUT_FIELD_TITLE_TITLE,
    INPUT_FIELD_TITLE_DESCRIPTION,
    INPUT_FIELD_PLACEHOLDER_TITLE,
    INPUT_FIELD_PLACEHOLDER_DESCRIPTION,
  },
} = useLanguage();

export default {
  type: "object",
  name: SchemaTypes.InputField,
  title: INPUT_FIELD_TITLE,
  fields: [
    {
      type: "string",
      name: "title",
      title: INPUT_FIELD_TITLE_TITLE,
      description: INPUT_FIELD_TITLE_DESCRIPTION,
    },
    {
      type: "string",
      name: "placeholder",
      title: INPUT_FIELD_PLACEHOLDER_TITLE,
      description: INPUT_FIELD_PLACEHOLDER_DESCRIPTION,
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
