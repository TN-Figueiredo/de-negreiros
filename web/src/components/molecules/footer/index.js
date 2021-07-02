import React from "react";
import PropTypes from "prop-types";
import useSiteSettings from "../../../hooks/useSiteSettings.hooks";
import Logo from "../../atoms/logo";
import Svg from "../../atoms/svg";
import { getYear } from "../../../lib/helpers";

import {
  FooterTag,
  LogoSocial,
  Social,
  SocialIcon,
  Copyright,
} from "./footer.styles";

const getCopy = () => {
  const deliverDate = getYear(new Date("07/02/2021"));
  if (deliverDate < getYear()) {
    return `${deliverDate}-${getYear()}`;
  } else {
    return getYear();
  }
};

const Footer = () => {
  const { footerLogo } = useSiteSettings();
  return (
    <FooterTag>
      <LogoSocial>
        <Logo logo={footerLogo} style={{ height: 130 }} />
        <Social>
          <SocialIcon left={true}>
            <Svg name="instagramStyled" height={16} width={16} />
          </SocialIcon>
          <SocialIcon>
            <Svg name="facebookStyled" height={16} width={16} />
          </SocialIcon>
        </Social>
      </LogoSocial>
      <Copyright>
        {getCopy()}
        &copy; COPYRIGHT BY DE NEGREIROS. TODOS OS DIREITOS RESERVADOS.
      </Copyright>
    </FooterTag>
  );
};

Footer.propTypes = {};

export default Footer;
