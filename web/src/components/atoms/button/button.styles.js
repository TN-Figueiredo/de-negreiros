import styled from "styled-components";

const getButtonBackground = (props) => {
  const backgroundOptions = {
    ["positive"]: props.theme.colors.$green600,
    ["blue"]: props.theme.colors.$blue500,
    ["blueInverted"]: props.theme.colors.$grey000,
    ["blueBorder"]: props.theme.colors.$blue500,
    ["transparentWhite"]: "transparent",
  };
  return backgroundOptions[props.variant]
    ? backgroundOptions[props.variant]
    : props.theme.colors.$grey050;
};

const getButtonBorder = (props) => {
  const borderOptions = {
    ["positive"]: `1px solid ${props.theme.colors.$green600}`,
    ["blue"]: `1px solid ${props.theme.colors.$blue500}`,
    ["blueInverted"]: `1px solid ${props.theme.colors.$grey000}`,
    ["blueBorder"]: `1px solid ${props.theme.colors.$grey000}`,
    ["transparentWhite"]: `1px solid ${props.theme.colors.$grey000}`,
  };
  return borderOptions[props.variant]
    ? borderOptions[props.variant]
    : `1px solid ${props.theme.colors.$grey600}`;
};

export const getButtonText = (props) => {
  const textOptions = {
    ["positive"]: props.theme.colors.$green600,
    ["blue"]: props.theme.colors.$grey000,
    ["blueInverted"]: props.theme.colors.$blue500,
    ["blueBorder"]: props.theme.colors.$grey000,
    ["transparentWhite"]: props.theme.colors.$grey000,
  };
  return textOptions[props.variant]
    ? textOptions[props.variant]
    : props.theme.colors.$grey900;
};

export const StyledButton = styled.a`
  background-color: ${(props) => getButtonBackground(props)};
  border: ${(props) => getButtonBorder(props)};
  color: ${(props) => getButtonText(props)};
  height: 40px;
  width: ${(props) => (props.full ? "100%" : "185px")};
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: ${(props) => props.theme.$spacingMD};
  padding-right: ${(props) => props.theme.$spacingMD};
  border-radius: ${(props) => props.theme.$radiusSM};
  cursor: pointer;
  @media (max-width: 600px) {
    height: 34px;
    width: 160px;
  }
`;

export const StyledIcon = styled.div`
  margin-top: ${(props) => props.theme.$spacingXS};
  margin-left: ${(props) => props.theme.$spacingLG};
  @media (max-width: 600px) {
    margin-left: ${(props) => props.theme.$spacingXS};
  }
`;
