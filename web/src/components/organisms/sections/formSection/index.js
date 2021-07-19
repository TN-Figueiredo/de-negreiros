import React from "react";
import PropTypes from "prop-types";
import Form from "../../../atoms/form";
import useTheme from "../../../../hooks/useTheme.hooks";
import Title from "../../../atoms/title";
import { handleColor } from "../../../../lib/helpers";
import { Container, Content } from "./formSection.styles";

const FormSection = ({ title, fields, backgroundColor, submit }) => {
  const theme = useTheme();
  return (
    <Container backgroundColor={backgroundColor}>
      <Content>
        <Title
          fontSize={theme.fonts.$fontSizeLG}
          color={handleColor(backgroundColor, theme)}
        >
          {title}
        </Title>
        <Form
          title={title}
          fields={fields}
          submit={submit}
          backgroundColor={backgroundColor}
        />
      </Content>
    </Container>
  );
};

FormSection.propTypes = {};

export default FormSection;
