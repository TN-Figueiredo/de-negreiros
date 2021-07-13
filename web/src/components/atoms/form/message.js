import React from "react";
import PropTypes from "prop-types";

import { Container, Label, TextArea } from "./form.styles";

const Message = (
  { maxLength, placeholder, required, title },
  values,
  setValue,
  valueIndex
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
      <Label htmlFor={lowerTitle}>{title}</Label>
      <TextArea
        id={lowerTitle}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        value={values[valueIndex]}
        onChange={handleChange}
      />
    </Container>
  );
};

Message.propTypes = {};

export default Message;
