import React from "react";
import PropTypes from "prop-types";
import FloatingWhatsApp from "react-floating-whatsapp";

const OverlaySection = (props) => {
    const { whatsappOverlay: { Show: showWhatsapp } } = props;
    return (
        <>
            {showWhatsapp && <FloatingWhatsApp />}
        </>
    );
};

OverlaySection.propTypes = {};

export default OverlaySection;
