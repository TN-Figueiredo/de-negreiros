import React from "react";
import PropTypes from "prop-types";
import useNavbarMenu from "../../../hooks/useNavbarMenu.hooks";
import useTheme from "../../../hooks/useTheme.hooks";
import Svg from "../../atoms/svg";

import {
  Container,
  Content,
  LinkContainer,
  LinkItem,
} from "./mobileMenu.styles";

const iconIndex = {
  0: "home",
  1: "discover",
  2: "photos",
  3: "mail",
};

const MobileMenu = (props) => {
  const menu = useNavbarMenu();
  const theme = useTheme();

  const isActive = (url) =>
    typeof window !== "undefined" && window.location.pathname === url;

  const renderIcon = (index, url) => {
    return (
      <Svg
        name={iconIndex[index]}
        fill={isActive(url) ? theme.colors.$grey900 : theme.colors.$grey400}
      />
    );
  };

  console.log("menu", menu);
  const renderMenuItems = () => {
    return menu.map(({ identifier, title, url }, index) => (
      <LinkContainer>
        {renderIcon(index, url)}
        <LinkItem key={identifier} to={url} active={isActive(url) ? 1 : 0}>
          {title}
        </LinkItem>
      </LinkContainer>
    ));
  };

  return (
    <Container>
      <Content>{renderMenuItems()}</Content>
    </Container>
  );
};

MobileMenu.propTypes = {};

export default MobileMenu;
