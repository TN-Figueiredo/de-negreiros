import React from "react";
import PropTypes from "prop-types";

import { Container, Label, TextArea } from "./form.styles";

const Message = ({ maxLength, placeholder, required, title }) => {
  return (
    <Container>
      <Label>{title}</Label>
      <TextArea
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
      />
    </Container>
  );
};

Message.propTypes = {};

export default Message;
