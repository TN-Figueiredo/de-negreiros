import React from "react";
import PropTypes from "prop-types";
import BlockContent from "@sanity/block-content-to-react";
import Button from "../../atoms/button";

import {
  Container,
  StyledSanityImage,
  Overlay,
  ContentContainer,
  Content,
  Text,
  Buttons,
  ButtonContainer,
} from "./banner.styles";

const renderButtons = (buttons) =>
  buttons.map(({ label, url }, index) => (
    <ButtonContainer upper={index === 0}>
      <Button
        label={label}
        url={url}
        variant={index === 0 ? "blue" : "transparentWhite"}
      />
    </ButtonContainer>
  ));

const Banner = ({ background, bannerText, buttons }) => {
  const { alt } = background;
  console.log("bannerText", bannerText);
  return (
    <Container>
      <Overlay>
        <StyledSanityImage {...background} alt={alt} />
        <ContentContainer>
          <Content>
            <Text>
              <BlockContent blocks={bannerText} serializers={{}} />
            </Text>
            <Buttons>{renderButtons(buttons)}</Buttons>
          </Content>
        </ContentContainer>
      </Overlay>
      {/* <Svg name="bottomWave" /> */}
      {/* <EndWave></EndWave> */}
    </Container>
  );
};

Banner.propTypes = {};

export default Banner;
