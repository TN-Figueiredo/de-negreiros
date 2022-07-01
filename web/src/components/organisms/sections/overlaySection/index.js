import React from "react";
import PropTypes from "prop-types";
import FloatingWhatsApp from "react-floating-whatsapp";
import useSiteSettings from "../../../../hooks/useSiteSettings.hooks";
import Felipe from "../../../../../static/felipe.jpg"

const OverlaySection = (props) => {
    const { whatsappOverlay: { Show: showWhatsapp } } = props;
    const { whatsapp } = useSiteSettings();
    return (
        <>
            {showWhatsapp && <FloatingWhatsApp phoneNumber={whatsapp} accountName="Felipe Negreiros" avatar={Felipe} statusMessage="Geralmente responde em até 1 hora" chatMessage={`Olá! 🤝 \nComo podemos ajudar?`} placeholder="Digite aqui como podemos ajudá-lo ..." />}
        </>
    );
};

OverlaySection.propTypes = {};

export default OverlaySection;
