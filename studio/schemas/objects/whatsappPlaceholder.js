import useLanguage from "../../hooks/useLanguage";
import { SchemaTypes } from "../constants";

const {
  General: { WHATSAPP_PLACEHOLDER_TITLE, WHATSAPP_PLACEHOLDER_TITLE_TITLE },
} = useLanguage();

export default {
  type: "object",
  name: SchemaTypes.WhatsAppPlaceholder,
  title: WHATSAPP_PLACEHOLDER_TITLE,
  fields: [
    {
      type: "boolean",
      name: "Show",
      title: WHATSAPP_PLACEHOLDER_TITLE_TITLE,
    },
  ],
};
