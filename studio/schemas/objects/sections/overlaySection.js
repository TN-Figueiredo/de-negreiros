import useLanguage from "../../../hooks/useLanguage";
import { SchemaTypes } from "../../constants";

const {
    OverlaySection: { OVERLAY_SECTION_TITLE, OVERLAY_WHATSAPP_SECTION_TITLE, OVERLAY_WHATSAPP_TITLE_TITLE }
} = useLanguage();

export default {
    type: SchemaTypes.Object,
    name: SchemaTypes.OverlaySection,
    title: OVERLAY_SECTION_TITLE,
    fields: [
        {
            type: SchemaTypes.String,
            name: SchemaTypes.Title,
            title: OVERLAY_WHATSAPP_SECTION_TITLE,
        },
        {
            type: SchemaTypes.WhatsappOverlay,
            name: SchemaTypes.WhatsappOverlay,
            title: OVERLAY_WHATSAPP_TITLE_TITLE,
        }
    ],
    preview: {
        select: {
            title: SchemaTypes.Title,
        },
    },
};
