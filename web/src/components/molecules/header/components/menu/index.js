import React from "react";
import PropTypes from "prop-types";
import useNavbarMenu from "../../../../../hooks/useNavbarMenu.hooks";

import { Container, LinkItem } from "./menu.styles";

const Menu = () => {
  const menu = useNavbarMenu().sort((a, b) => (a.weight > b.weight ? 1 : -1));
  const renderMenuItems = () => {
    return menu.map(({ identifier, title, url }) => (
      <LinkItem key={identifier} to={url}>
        {title}
      </LinkItem>
    ));
  };
  return <Container>{renderMenuItems()}</Container>;
};

Menu.propTypes = {};

export default Menu;
