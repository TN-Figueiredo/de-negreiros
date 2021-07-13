import React from "react";
import PropTypes from "prop-types";
import { Router } from "@reach/router";
import useNavbarMenu from "../../../../../hooks/useNavbarMenu.hooks";

import { Container, LinkItem } from "./menu.styles";

const isActive = (url) =>
  typeof window !== "undefined" && window.location.pathname === url;

const Menu = () => {
  const menu = useNavbarMenu();
  const renderMenuItems = () => {
    return menu.map(({ identifier, title, url }) => (
      <LinkItem key={identifier} to={url} active={isActive(url) ? 1 : 0}>
        {title}
      </LinkItem>
    ));
  };
  return <Container>{renderMenuItems()}</Container>;
};

Menu.propTypes = {};

export default Menu;
