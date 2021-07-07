import useLanguage from "../../../hooks/useLanguage";
import { SchemaTypes } from "../../constants";

const {
  Form: {
    INPUT_SELECT_TITLE,
    INPUT_SELECT_TITLE_TITLE,
    INPUT_SELECT_TITLE_DESCRIPTION,
    INPUT_SELECT_OPTIONS_TITLE,
  },
} = useLanguage();

export default {
  type: "object",
  name: SchemaTypes.InputSelect,
  title: INPUT_SELECT_TITLE,
  fields: [
    {
      type: "string",
      name: "title",
      title: INPUT_SELECT_TITLE_TITLE,
      description: INPUT_SELECT_TITLE_DESCRIPTION,
    },
    {
      type: "array",
      name: "options",
      title: INPUT_SELECT_OPTIONS_TITLE,
      of: [{ type: "string" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
