import React from "react";
import PropTypes from "prop-types";
import useSiteSettings from "../../../../hooks/useSiteSettings.hooks";
import { renderSectionOptions } from "../components";
import Photo from "../../../../../static/foto.jpg"

import { Container, StyledSanityImage } from "./overlaySection.styles";

const OverlaySection = (props) => {
    const { whatsappOverlay: { Show: showWhatsapp } } = props;
    const { whatsapp } = useSiteSettings();
    return (
        <>
        </>
    );
};

OverlaySection.propTypes = {};

export default OverlaySection;
