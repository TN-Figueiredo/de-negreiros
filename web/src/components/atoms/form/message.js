import React from "react";
import PropTypes from "prop-types";

import { Container, Label, TextArea } from "./form.styles";

const Message = (
  { maxLength, placeholder, required, title },
  values,
  setValue,
  valueIndex,
  backgroundColor,
  black
) => {
  const lowerTitle = title.toLowerCase();
  const handleChange = (event) => {
    const updatedValues = values.map((value, index) =>
      index === valueIndex ? event.target.value : value
    );
    setValue(updatedValues);
  };

  return (
    <Container>
      <Label
        htmlFor={lowerTitle}
        backgroundcolor={backgroundColor}
        black={black}
      >
        {title}
      </Label>
      <TextArea
        id={lowerTitle}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        value={values[valueIndex]}
        onChange={handleChange}
        backgroundcolor={backgroundColor}
        black={black}
      />
    </Container>
  );
};

Message.propTypes = {};

export default Message;
