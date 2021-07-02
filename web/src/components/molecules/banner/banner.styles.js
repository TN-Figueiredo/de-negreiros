import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 610px;
  position: relative;
  left: 0px;
  right: 0px;
  top: -90px;
  z-index: -90;
`;

export const EndWave = styled.div`
  width: 1140px;
  height: 700px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column-reverse;
`;

export const imageStyle = {
  top: 0,
  left: "50%",
  marginLeft: "-50vw",
  marginRight: "-50vw",
  maxWidth: " 100vw",
  position: "absolute",
  right: "50%",
  width: "100vw",
  maxHeight: 700,
  objectFit: "cover",
  zIndex: -100,
};
