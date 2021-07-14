import React from "react";
import PropTypes from "prop-types";

import { Container, Label, Selector, Option } from "./form.styles";

const Select = (
  { _key, options, required, title },
  values,
  setValue,
  valueIndex,
  backgroundColor
) => {
  const lowerTitle = title.toLowerCase();
  const handleChange = (event) => {
    const updatedValues = values.map((value, index) =>
      index === valueIndex ? event.target.value : value
    );
    setValue(updatedValues);
  };

  return (
    <Container key={_key}>
      <Label htmlFor={lowerTitle} backgroundColor={backgroundColor}>
        {title}
      </Label>
      <Selector
        id={lowerTitle}
        value={values[valueIndex]}
        onChange={handleChange}
        required={required}
        backgroundColor={backgroundColor}
      >
        {["", ...options].map((option, index) => (
          <Option key={index}>{option}</Option>
        ))}
      </Selector>
    </Container>
  );
};

Select.propTypes = {};

export default Select;
