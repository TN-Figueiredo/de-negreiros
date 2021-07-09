import React from "react";
import PropTypes from "prop-types";

import { Container, Label, Selector, Option } from "./form.styles";

const Select = (
  { _key, options, required, title },
  values,
  setValue,
  index
) => {
  console.log("index", index);
  return (
    <Container key={_key}>
      <Label>{title}</Label>
      <Selector>
        {["", ...options].map((option, index) => (
          <Option key={index} value={option.toLowerCase()}>
            {option}
          </Option>
        ))}
      </Selector>
    </Container>
  );
};

Select.propTypes = {};

export default Select;
