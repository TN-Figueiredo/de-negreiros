import React from "react";
import PropTypes from "prop-types";
import useNavbarMenu from "../../../../hooks/useNavbarMenu.hooks";

const Menu = (props) => {
  const menu = useNavbarMenu();
  const renderMenuItems = () => {
    return menu.map(({ identifier, title }) => (
      <span key={identifier}>{title}</span>
    ));
  };
  return <div>{renderMenuItems()}</div>;
};

Menu.propTypes = {};

export default Menu;
