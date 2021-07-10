import React from "react";
import PropTypes from "prop-types";

import { Container, Label, Selector, Option } from "./form.styles";

const Select = (
  { _key, options, required, title },
  values,
  setValue,
  valueIndex
) => {
  const handleChange = (event) => {
    const updatedValues = values.map((value, index) =>
      index === valueIndex ? event.target.value : value
    );
    setValue(updatedValues);
  };

  return (
    <Container key={_key}>
      <Label>{title}</Label>
      <Selector
        value={values[valueIndex]}
        onChange={handleChange}
        required={required}
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
