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
  BannerText,
} from "./banner.styles";

const renderButtons = (buttons) =>
  buttons.map(({ label, url }, index) => (
    <ButtonContainer key={index} first={index === 0}>
      <Button
        url={url}
        variant={index === 0 ? "blue" : "transparentWhite"}
        // TODO: add option for selecting icon on studio
        icon={index === 0 ? "whatsapp" : ""}
        iconFill={useTheme().colors.$grey000}
      >
        {label}
      </Button>
    </ButtonContainer>
  ));

const Banner = ({ background, block, buttons, titleAndContent }) => {
  const renderTitleAndContent = ({ title, block }) => {
    if (title) {
      return (
        <>
          <Title>{title}</Title>
          <BannerText>
            <BlockContent blocks={block || []} serializers={{}} />
          </BannerText>
        </>
      );
    } else {
      return (
        <Title>
          <BlockContent blocks={block || []} serializers={{}} />
        </Title>
      );
    }
  };

  return (
    <Container>
      <Overlay>
        <StyledSanityImage {...background} alt={background?.alt} />
        <ContentContainer>
          <Content>
            {renderTitleAndContent(titleAndContent)}
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
