import React from "react";
import PropTypes from "prop-types";
import InputText from "./input";
import Select from "./select";
import Message from "./message";
import Button from "../button";

import { FormContainer, Wrapper, SubmitContainer } from "./form.styles";

const renderInput = {
  select: Select,
  text: InputText,
  message: Message,
};

const getInputType = (type) => type.replace("input", "").toLowerCase();

const Form = ({ fields, submit }) => {
  const fieldsCopy = [...fields];
  const smallFields = fields.filter(
    (field) => Number.isInteger(field.maxLength) && field.maxLength < 20
  );
  let smallIndex;

  for (let i = 0; i < fields.length; i++) {
    if (fields[i].title === smallFields[0].title) {
      smallIndex = i;
    }
  }

  const firstFields = fieldsCopy.splice(0, smallIndex);
  const middleFields = [fields[smallIndex], fields[smallIndex + 1]];
  const lastFields = fields.slice(smallIndex + 2);

  let form = [];
  if (middleFields.length > 0) {
    firstFields.map((field) => (
      <Wrapper key={field._key} small={field.maxLength < 20}>
        {form.push(renderInput[getInputType(field._type)](field))}
      </Wrapper>
    ));

    const item = (
      <Wrapper small>
        {middleFields.map((field) =>
          renderInput[getInputType(field._type)](field)
        )}
      </Wrapper>
    );

    form.push(item);

    lastFields.map((field) => (
      <Wrapper key={field._key} small={field.maxLength < 20}>
        {form.push(renderInput[getInputType(field._type)](field))}
      </Wrapper>
    ));
  } else {
    fields.map((field) => (
      <Wrapper key={field._key} small={field.maxLength < 20}>
        {form.push(renderInput[getInputType(field._type)](field))}
      </Wrapper>
    ));
  }

  return (
    <FormContainer>
      {form}
      <SubmitContainer>
        <Button variant="blueBorder" full>
          {submit}
        </Button>
      </SubmitContainer>
    </FormContainer>
  );
};

Form.propTypes = {};

export default Form;
