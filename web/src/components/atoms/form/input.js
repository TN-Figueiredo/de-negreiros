import React from "react";
import PropTypes from "prop-types";

import { Container, Label, Text } from "./form.styles";

const InputText = ({ title, maxLength, placeholder, required }) => {
  const lowerTitle = title.toLowerCase();
  return (
    <Container small={maxLength < 20}>
      <Label htmlFor={lowerTitle}>{title}</Label>
      <Text
        id={lowerTitle}
        type={lowerTitle}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        small={maxLength < 20}
      />
    </Container>
  );
};

InputText.propTypes = {};

export default InputText;
