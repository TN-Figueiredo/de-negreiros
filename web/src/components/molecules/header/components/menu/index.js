import React from "react";
import PropTypes from "prop-types";
import { Router } from "@reach/router";
import useNavbarMenu from "../../../../../hooks/useNavbarMenu.hooks";

import { Container, LinkItem } from "./menu.styles";

const Menu = () => {
  const menu = useNavbarMenu();
  const renderMenuItems = () => {
    return menu.map(({ identifier, title, url }) => {
      return (
        <LinkItem
          key={identifier}
          to={url}
          active={(window.location.pathname === url).toString()}
        >
          {title}
        </LinkItem>
      );
    });
  };
  return <Container>{renderMenuItems()}</Container>;
};

Menu.propTypes = {};

export default Menu;
