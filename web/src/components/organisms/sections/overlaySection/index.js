import React from "react";
import PropTypes from "prop-types";
import FloatingWhatsApp from 'react-floating-whatsapp';
import useSiteSettings from "../../../../hooks/useSiteSettings.hooks";
import { renderSectionOptions } from "../components";
import Photo from "../../../../../static/foto.jpg"

import { Container, StyledSanityImage } from "./overlaySection.styles";

const OverlaySection = (props) => {
    const { whatsappOverlay: { Show: showWhatsapp } } = props;
    const { whatsapp } = useSiteSettings();
    return (
        <>
            {showWhatsapp && <FloatingWhatsApp phoneNumber={`55${whatsapp}`} avatar={Photo} accountName="Felipe Figueiredo" statusMessage="Geralmente responde em até 1 hora" chatMessage={`Olá! 🤝 \nComo posso ajudá-lo?`} placeholder="Digite aqui como podemos ajudá-lo..." />}
        </>
    );
};

OverlaySection.propTypes = {};

export default OverlaySection;
