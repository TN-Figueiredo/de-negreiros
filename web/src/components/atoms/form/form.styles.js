import styled from "styled-components";

export const FormContainer = styled.div`
  margin-top: ${(props) => props.theme.$spacingXS};
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.small ? "row" : "column")};
  justify-content: space-between;
  flex: 1;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-basis: ${(props) => (props.small ? "39%; " : "60%")};
`;

export const Content = styled.div``;

export const Label = styled.label`
  font-size: ${(props) => props.theme.fonts.$fontSizeMD};
  color: ${(props) => props.theme.colors.$grey000};
  margin-top: ${(props) => props.theme.$spacingXS};
  margin-bottom: ${(props) => props.theme.$spacingXS};
  font-weight: ${(props) => props.theme.fonts.$fontWeightMed};
`;

export const Text = styled.input`
  display: flex;
  height: ${(props) => props.theme.$spacingXL};
  margin-bottom: ${(props) => props.theme.$spacingXS};
  border-radius: ${(props) => props.theme.$radiusSM};
  border: ${(props) => `1px solid ${props.theme.colors.$grey000}`};
  padding-left: ${(props) => props.theme.$spacingSM};
  padding-right: ${(props) => props.theme.$spacingSM};
  width: ${(props) => (props.small ? "85%" : "")};
`;

export const TextArea = styled.textarea`
  height: 100px;
  padding-left: ${(props) => props.theme.$spacingSM};
  padding-right: ${(props) => props.theme.$spacingSM};
  border: ${(props) => `1px solid ${props.theme.colors.$grey000}`};
  border-radius: ${(props) => props.theme.$radiusSM};
  margin-bottom: ${(props) => props.theme.$spacingMD};
`;

export const Selector = styled.select`
  height: 40px;
  margin-bottom: ${(props) => props.theme.$spacingXS};
  border-radius: ${(props) => props.theme.$radiusSM};
  border: ${(props) => `1px solid ${props.theme.colors.$grey000}`};
  padding-left: ${(props) => props.theme.$spacingSM};
  padding-right: ${(props) => props.theme.$spacingSM};
  font-size: ${(props) => props.theme.fonts.$fontSizeMD};
`;

export const Option = styled.option`
  font-size: ${(props) => props.theme.fonts.$fontSizeMD};
`;

export const SubmitContainer = styled.div`
  width: 94%;
`;
