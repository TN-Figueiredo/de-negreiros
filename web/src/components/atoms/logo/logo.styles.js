import styled from "styled-components";
import SanityImage from "gatsby-plugin-sanity-image";

export const StyledSanityImage = styled(SanityImage)`
  height: ${(props) => (props.navbar ? "70px" : "")};
`;
