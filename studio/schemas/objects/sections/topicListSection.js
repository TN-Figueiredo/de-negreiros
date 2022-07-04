import useLanguage from "../../../hooks/useLanguage";
import { SchemaTypes } from "../../constants";

const {
    TopicsList: { TOPICS_LIST_SECTION_TITLE, TOPICS_LIST_TITLE, TOPICS_LIST_TITLE_TITLE }
} = useLanguage();

export default {
    type: SchemaTypes.Object,
    name: SchemaTypes.TopicsListSection,
    title: TOPICS_LIST_TITLE,
    fields: [
        {
            type: SchemaTypes.String,
            name: SchemaTypes.Title,
            title: TOPICS_LIST_SECTION_TITLE,
        },
        {
            type: "boolean",
            name: "show",
            title: TOPICS_LIST_TITLE_TITLE,
        },
    ],
};
