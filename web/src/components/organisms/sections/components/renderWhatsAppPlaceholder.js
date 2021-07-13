import React from "react";
import PropTypes from "prop-types";
import Svg from "../../../atoms/svg";
import Title from "../../../atoms/title";
import useSiteSettings from "../../../../hooks/useSiteSettings.hooks";

import {
  WhatsAppPlaceHolderContainer,
  Phone,
  IconContainer,
  WhatsApp,
  Spacing,
} from "./sections.styles";

const renderNumber = (number) => {
  const cityCode = number.slice(0, 2);
  const cellPrefix = number.slice(2, 3);
  const numberPt1 = number.slice(3, 7);
  const numberPt2 = number.slice(7, number.length);
  return `(${cityCode}) ${cellPrefix} ${numberPt1}-${numberPt2}`;
};

const handleClick = (whatsapp, whatsappMessage) => {
  return window.open(
    `https://web.whatsapp.com/send?l=pt_br&phone=55${whatsapp}&text=${whatsappMessage}`
  );
};

const renderWhatsAppPlaceholder = () => {
  const { whatsapp, whatsappMessage } = useSiteSettings();
  return (
    <WhatsAppPlaceHolderContainer
      onClick={() => handleClick(whatsapp, whatsappMessage)}
    >
      <Phone>
        <Svg name="phone" height={134} width={134} />
        <IconContainer>
          <Svg name="whatsapp" height={34} width={34} />
        </IconContainer>
      </Phone>
      <WhatsApp>
        <Title>WhatsApp</Title>
        <Spacing />
        <Title>{renderNumber(whatsapp)}</Title>
      </WhatsApp>
    </WhatsAppPlaceHolderContainer>
  );
};

renderWhatsAppPlaceholder.propTypes = {};

export default renderWhatsAppPlaceholder;
