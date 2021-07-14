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
  General: {
    BACKGROUND_COLOR_TITLE,
    BACKGROUND_COLOR_OPTION_1,
    BACKGROUND_COLOR_OPTION_2,
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
        { type: SchemaTypes.inputText },
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
    {
      type: "string",
      name: "backgroundColor",
      title: BACKGROUND_COLOR_TITLE,
      options: {
        list: [
          {
            title: BACKGROUND_COLOR_OPTION_1,
            value: BACKGROUND_COLOR_OPTION_1.toLowerCase(),
          },
          {
            title: BACKGROUND_COLOR_OPTION_2,
            value: BACKGROUND_COLOR_OPTION_2.toLowerCase(),
          },
        ],
        layout: "radio",
      },
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
