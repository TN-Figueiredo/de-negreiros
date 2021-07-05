import React from "react";
import PropTypes from "prop-types";
import BlockContent from "@sanity/block-content-to-react";
import Button from "../../atoms/button";
import Title from "../../atoms/title";
import useTheme from "../../../hooks/useTheme.hooks";

import {
  Container,
  StyledSanityImage,
  Overlay,
  ContentContainer,
  Content,
  Buttons,
  ButtonContainer,
} from "./banner.styles";

const renderButtons = (buttons) =>
  buttons.map(({ label, url }, index) => (
    <ButtonContainer key={index} first={index === 0}>
      <Button
        label={label}
        url={url}
        variant={index === 0 ? "blue" : "transparentWhite"}
        // TODO: add option for selecting icon on studio
        icon={index === 0 ? "whatsapp" : ""}
        iconFill={useTheme().colors.$grey000}
      />
    </ButtonContainer>
  ));

const Banner = ({ background, bannerText, buttons }) => {
  const { alt } = background;
  console.log("banner.js BLOCKCONTENT NEEDED", bannerText);
  return (
    <Container>
      <Overlay>
        <StyledSanityImage {...background} alt={alt} />
        <ContentContainer>
          <Content>
            <Title>
              <BlockContent blocks={bannerText} serializers={{}} />
            </Title>
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
