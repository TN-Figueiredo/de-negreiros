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

  console.log("required", title);

  const isPhone = () =>
    lowerTitle === "telephone" ||
    lowerTitle === "phone" ||
    lowerTitle === "telefone";

  console.log("isPhone", isPhone() ? "tel" : lowerTitle);

  return (
    <Container key={_key} small={maxLength < 20}>
      <Label htmlFor={lowerTitle}>{title}</Label>
      <Text
        id={lowerTitle}
        type={isPhone() ? "tel" : lowerTitle}
        placeholder={placeholder}
        maxLength={maxLength}
        required={required}
        small={maxLength < 20}
        value={values[valueIndex]}
        onChange={handleChange}
        pattern={
          isPhone()
            ? "(^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$)"
            : null
        }
      />
    </Container>
  );
};

InputText.propTypes = {};

export default InputText;
