import useLanguage from "../../hooks/useLanguage";
import { SchemaTypes } from "../constants";

const {
    OverlaySection: { OVERLAY_WHATSAPP_TITLE, OVERLAY_WHATSAPP_TITLE_TITLE }
} = useLanguage();

export default {
    type: SchemaTypes.Object,
    name: SchemaTypes.WhatsappOverlay,
    title: OVERLAY_WHATSAPP_TITLE,
    fields: [
        {
            type: "boolean",
            name: "Show",
            title: OVERLAY_WHATSAPP_TITLE_TITLE,
        },
    ],
};
