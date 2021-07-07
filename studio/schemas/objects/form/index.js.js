import useLanguage from "../../../hooks/useLanguage";
import { SchemaTypes } from "../../constants";

const {
  Form: {
    FORM_TITLE,
    FORM_TITLE_TITLE,
    FORM_TITLE_DESCRIPTION,
    FORM_FIELDS_TITLE,
    FORM_SUBMIT_TITLE,
    FORM_SUBMIT_DESCRIPTION,
  },
} = useLanguage();

export default {
  type: "object",
  name: SchemaTypes.Form,
  title: FORM_TITLE,
  fields: [
    {
      type: "string",
      name: "title",
      title: FORM_TITLE_TITLE,
      description: FORM_TITLE_DESCRIPTION,
    },
    {
      type: "array",
      name: "fields",
      title: FORM_FIELDS_TITLE,
      of: [
        { type: SchemaTypes.InputField },
        { type: SchemaTypes.InputSelect },
        { type: SchemaTypes.InputMessage },
      ],
    },
    {
      type: "string",
      name: "submit",
      title: FORM_SUBMIT_TITLE,
      description: FORM_SUBMIT_DESCRIPTION,
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
