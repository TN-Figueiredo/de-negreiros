import React from "react";
import PropTypes from "prop-types";

import { Container, Label, Text, Phone } from "./form.styles";

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

  const isPhone = () =>
    lowerTitle === "telephone" ||
    lowerTitle === "phone" ||
    lowerTitle === "telefone";

  if (isPhone()) {
    return (
      <Container key={_key} small={maxLength < 20 ? 1 : 0}>
        <Label htmlFor={lowerTitle}>{title}</Label>
        <Phone
          id={lowerTitle}
          type={lowerTitle}
          placeholder={placeholder}
          minLength="16"
          required={required}
          small={maxLength < 20 ? 1 : 0}
          value={values[valueIndex]}
          onChange={handleChange}
          mask="(99) 9 9999-9999"
          maskChar=" "
          permanents="[2,5]"
        />
      </Container>
    );
  }

  return (
    <Container key={_key} small={maxLength < 20 ? 1 : 0}>
      <Label htmlFor={lowerTitle}>{title}</Label>
      <Text
        id={lowerTitle}
        type={lowerTitle}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        small={maxLength < 20 ? 1 : 0}
        value={values[valueIndex]}
        onChange={handleChange}
      />
    </Container>
  );
};

InputText.propTypes = {};

export default InputText;
