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

const Form = ({ fields, submit, title, backgroundColor }) => {
  const [values, setValues] = useState(new Array(fields.length).fill(""));
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
        <Wrapper key={field._key} small={field.maxLength < 20 ? 1 : 0}>
          {form.push(
            renderInput[getInputType(field._type)](
              field,
              values,
              setValues,
              index,
              backgroundColor
            )
          )}
        </Wrapper>
      );
    });

    const item = (
      <Wrapper small={1}>
        {middleFields.map((field, index) => {
          const positionIndex = smallIndex + index;
          return renderInput[getInputType(field._type)](
            field,
            values,
            setValues,
            positionIndex,
            backgroundColor
          );
        })}
      </Wrapper>
    );

    form.push(item);

    lastFields.map((field, index) => {
      const positionIndex = form.length + 1 + index;
      return (
        <Wrapper key={field._key} small={field.maxLength < 20 ? 1 : 0}>
          {form.push(
            renderInput[getInputType(field._type)](
              field,
              values,
              setValues,
              positionIndex,
              backgroundColor
            )
          )}
        </Wrapper>
      );
    });
  } else {
    fields.map((field) => (
      <Wrapper key={field._key} small={field.maxLength < 20 ? 1 : 0}>
        {form.push(
          renderInput[getInputType(field._type)](
            field,
            values,
            setValues,
            null,
            backgroundColor
          )
        )}
      </Wrapper>
    ));
  }

  const keyedForm = form.map((item, key) => cloneElement(item, { key }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setSubmitText("Submitting ...");
    const formElements = [...event.currentTarget.elements];
    const isValid =
      formElements.filter((elem) => elem.name === "bot-field")[0].value === "";

    const validFormElements = isValid ? formElements : [];

    if (validFormElements.length < 1) {
      // or some other cheeky error message
      // setSubmitText("It looks like you filled out too many fields!");
    } else {
      const filledOutElements = validFormElements
        .filter((elem) => !!elem.value)
        .map(
          (element) =>
            encodeURIComponent(element.name) +
            "=" +
            encodeURIComponent(element.value)
        )
        .join("&");

      console.log("filledOutElements", filledOutElements);

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: filledOutElements,
      })
        .then(() => {
          // setSubmitText("Successfully submitted!");
          alert("Success!!!");
        })
        .catch((_) => {
          alert("Error");
          // setSubmitText(
          //   "There was an error with your submission, please email me using the address above."
          // );
        });
    }
  };

  return (
    <FormContainer>
      <form
        name={title}
        method="post"
        netlify={1}
        data-netlify="true"
        netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        onSubmit={handleSubmit}
      >
        <p style={{ display: "none" }}>
          <label>
            Don’t fill this out if you expect to hear from me!
            <input name="bot-field" />
          </label>
        </p>
        <input
          style={{ display: "none" }}
          name="form-name"
          value={title}
          readOnly={true}
        />
        {keyedForm}
        <div data-netlify-recaptcha="true"></div>
        <SubmitContainer>
          <Submit
            type="submit"
            value={submit}
            backgroundColor={backgroundColor}
          />
        </SubmitContainer>
      </form>
    </FormContainer>
  );
};

Form.propTypes = {};

export default Form;
