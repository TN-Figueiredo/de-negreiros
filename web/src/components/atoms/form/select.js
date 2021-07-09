import React from "react";
import PropTypes from "prop-types";

import { Container, Label, Selector, Option } from "./form.styles";

const Select = ({ options, required, title }) => {
  return (
    <Container>
      <Label>{title}</Label>
      <Selector>
        {["", ...options].map((option) => (
          <Option value={option.toLowerCase()}>{option}</Option>
        ))}
      </Selector>
    </Container>
  );
};

Select.propTypes = {};

export default Select;
