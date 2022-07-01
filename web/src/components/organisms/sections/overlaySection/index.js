import PropTypes from "prop-types";
import React from "react";
import FloatingWhatsApp from "react-floating-whatsapp";

import Felipe from "../../../../../static/felipe.jpg"
import useSiteSettings from "../../../../hooks/useSiteSettings.hooks";

const OverlaySection = (props) => {
    const { whatsappOverlay: { Show: showWhatsapp } } = props;
    const { whatsapp } = useSiteSettings();
    return (
        <>
            {showWhatsapp && <FloatingWhatsApp phoneNumber={`55${whatsapp}`} accountName="Felipe Negreiros" avatar={Felipe} statusMessage="Geralmente responde em até 1 hora" chatMessage={`Olá! 🤝 \nComo podemos ajudar?`} placeholder="Digite aqui como podemos ajudá-lo ..." />}
        </>
    );
};

OverlaySection.propTypes = {};

export default OverlaySection;
