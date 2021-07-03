import React from "react";
import PropTypes from "prop-types";
import Button from "../../../atoms/button";
import useTheme from "../../../../hooks/useTheme.hooks";

import { Container, Buttons, ButtonContainer } from "./smallSection.styles";

const renderButtons = ({ buttons }) => {
  const btns = buttons.map(({ _key, label, url }, index) => (
    <ButtonContainer key={_key} first={index === 0}>
      <Button
        label={label}
        url={url}
        variant={index === 0 ? "blueInverted" : "transparentWhite"}
        // TODO: add option for selecting icon on studio
        icon={index === 0 ? "whatsapp" : ""}
        iconFill={useTheme().colors.$green500}
      />
    </ButtonContainer>
  ));
  return (
    <ButtonContainer>
      <Buttons>{btns}</Buttons>
    </ButtonContainer>
  );
};

const renderSectionOptions = {
  button: renderButtons,
};

const SmallSection = (props) => {
  const { select, title } = props;
  return <Container>{renderSectionOptions[select](props)}</Container>;
};

SmallSection.propTypes = {};

export default SmallSection;
