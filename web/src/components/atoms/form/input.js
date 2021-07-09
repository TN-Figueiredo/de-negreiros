import React from "react";
import PropTypes from "prop-types";

import { Container, Label, Text } from "./form.styles";

const InputText = (
  { _key, title, maxLength, placeholder, required },
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
    <Container key={_key} small={maxLength < 20}>
      <Label htmlFor={lowerTitle}>{title}</Label>
      <Text
        id={lowerTitle}
        type={lowerTitle}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        small={maxLength < 20}
        value={values[valueIndex]}
        onChange={handleChange}
      />
    </Container>
  );
};

InputText.propTypes = {};

export default InputText;
