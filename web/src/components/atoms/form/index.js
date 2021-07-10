import React, { useState, cloneElement } from "react";
import PropTypes from "prop-types";
import InputText from "./input";
import Select from "./select";
import Message from "./message";

import { FormContainer, Wrapper, SubmitContainer, Submit } from "./form.styles";

const renderInput = {
  select: Select,
  text: InputText,
  message: Message,
};

const getInputType = (type) => type.replace("input", "").toLowerCase();

const Form = ({ fields, submit }) => {
  const [values, setValues] = useState(new Array(fields.length).fill(""));
  const [errors, setErrors] = useState(new Array(fields.length).fill(null));
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
    firstFields.map((field, index) => {
      return (
        <Wrapper key={field._key} small={field.maxLength < 20}>
          {form.push(
            renderInput[getInputType(field._type)](
              field,
              values,
              setValues,
              index
            )
          )}
        </Wrapper>
      );
    });

    const item = (
      <Wrapper small>
        {middleFields.map((field, index) => {
          const positionIndex = smallIndex + index;
          return renderInput[getInputType(field._type)](
            field,
            values,
            setValues,
            positionIndex
          );
        })}
      </Wrapper>
    );

    form.push(item);

    lastFields.map((field, index) => {
      const positionIndex = form.length + 1 + index;
      return (
        <Wrapper key={field._key} small={field.maxLength < 20}>
          {form.push(
            renderInput[getInputType(field._type)](
              field,
              values,
              setValues,
              positionIndex
            )
          )}
        </Wrapper>
      );
    });
  } else {
    fields.map((field) => (
      <Wrapper key={field._key} small={field.maxLength < 20}>
        {form.push(
          renderInput[getInputType(field._type)](field, values, setValues)
        )}
      </Wrapper>
    ));
  }

  const keyedForm = form.map((item, key) => cloneElement(item, { key }));

  const handleSubmit = (event) => {
    console.log("event", event);
    event.preventDefault();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        {keyedForm}
        <SubmitContainer>
          <Submit type="submit" value={submit} />
        </SubmitContainer>
      </form>
    </FormContainer>
  );
};

Form.propTypes = {};

export default Form;
