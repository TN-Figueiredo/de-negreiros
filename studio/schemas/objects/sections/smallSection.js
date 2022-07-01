import useLanguage from "../../../hooks/useLanguage";
import { SchemaTypes } from "../../constants";

const {
  SizedSection: {
    SMALL_SECTION_TITLE,
    SMALL_SECTION_TITLE_TITLE,
    SECTION_IMAGE_TITLE,
    SECTION_IMAGE_DESCRIPTION,
    SECTION_SELECT_TITLE,
    SECTION_SELECT_ITEM1,
    SECTION_SELECT_ITEM2,
    SECTION_SELECT_ITEM4,
    SECTION_BUTTONS_TITLE,
    SECTION_BUTTONS_DESCRIPTION,
    SECTION_BUTTONS_ERROR,
  },
  General: { WHATSAPP_PLACEHOLDER_TITLE, WHATSAPP_PLACEHOLDER_TITLE_TITLE },
} = useLanguage();

export default {
  type: SchemaTypes.Object,
  name: SchemaTypes.SmallSection,
  title: SMALL_SECTION_TITLE,
  fields: [
    {
      type: SchemaTypes.String,
      name: SchemaTypes.Title,
      title: SMALL_SECTION_TITLE_TITLE,
    },
    {
      type: "mainImage",
      name: "background",
      title: SECTION_IMAGE_TITLE,
      description: SECTION_IMAGE_DESCRIPTION,
    },
    {
      type: "string",
      name: "select",
      title: SECTION_SELECT_TITLE,
      options: {
        list: [
          { title: SECTION_SELECT_ITEM1, value: "button" },
          {
            title: SECTION_SELECT_ITEM4,
            value: SchemaTypes.WhatsAppPlaceholder,
          },
        ],
        layout: "dropdown", // <-- defaults to 'dropdown'
      },
    },
    {
      type: "array",
      name: "buttons",
      title: SECTION_BUTTONS_TITLE,
      description: SECTION_BUTTONS_DESCRIPTION,
      validation: (Rule) =>
        Rule.custom((buttons, context) => {
          const {
            document: { sections },
          } = context;

          const section = sections.filter(
            (section) => section._type === "smallSection"
          );

          const selection = section[0].select;
          const hasButtonSelected = section[0].buttons.length > 0;

          if (selection === undefined) {
            return true;
          } else {
            if (selection !== "button" && hasButtonSelected) {
              return SECTION_BUTTONS_ERROR;
            } else {
              return true;
            }
          }
        }),
      of: [{ type: "button" }],
    },
    {
      type: SchemaTypes.WhatsAppPlaceholder,
      name: SchemaTypes.WhatsAppPlaceholder,
      title: WHATSAPP_PLACEHOLDER_TITLE_TITLE,
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
