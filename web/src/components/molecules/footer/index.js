import React from "react";
import PropTypes from "prop-types";
import useSiteSettings from "../../../hooks/useSiteSettings.hooks";
import useTheme from "../../../hooks/useTheme.hooks";
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

const allSocialIcons = {
  instagram: "instagramStyled",
  facebook: "facebookStyled",
};

const getCopy = () => {
  const deliverDate = getYear(new Date("07/02/2021"));
  if (deliverDate < getYear()) {
    return `${deliverDate}-${getYear()}`;
  } else {
    return getYear();
  }
};

const renderSocial = (socialMedia) => {
  const theme = useTheme();
  if (socialMedia.length > 0) {
    return (
      <Social>
        {socialMedia.map(({ name, url }, index) => {
          const svgName = allSocialIcons[name.toLowerCase()];
          if (svgName) {
            return (
              <SocialIcon
                key={name}
                left={index === 0}
                href={url}
                target="_blank"
              >
                <Svg
                  name={svgName}
                  height={16}
                  width={16}
                  fill={theme.colors.$grey000}
                />
              </SocialIcon>
            );
          }
        })}
      </Social>
    );
  }
};

const Footer = () => {
  const { footerLogo, socialMedia } = useSiteSettings();
  return (
    <FooterTag>
      <LogoSocial>
        <Logo logo={footerLogo} style={{ height: 130 }} />
        {renderSocial(socialMedia)}
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
