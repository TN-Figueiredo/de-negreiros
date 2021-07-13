import React from "react";
import PropTypes from "prop-types";
import Form from "../../../atoms/form";

import { Container, Content } from "./formSection.styles";

const FormSection = ({ title, fields, submit }) => {
  return (
    <Container>
      <Content>
        <Form title={title} fields={fields} submit={submit} />
      </Content>
    </Container>
  );
};

FormSection.propTypes = {};

export default FormSection;
