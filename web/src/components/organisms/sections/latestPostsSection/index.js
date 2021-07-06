import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import Title from "../../../atoms/title";
import Svg from "../../../atoms/svg";
import useTheme from "../../../../hooks/useTheme.hooks";
import useLatestPosts from "../../../../hooks/useLatestPosts.hooks";

import {
  Container,
  Content,
  Upper,
  Lower,
  HighLightedPostContainer,
  LeftArrowContainer,
  LeftArrow,
  RightArrowContainer,
  RightArrow,
  HighLightedPost,
  HighLightedImage,
  MoreArticles,
} from "./latestPostsSection.styles";

const BackArrow = ({ onClick }) => {
  const theme = useTheme();
  return (
    <LeftArrowContainer onClick={onClick}>
      <LeftArrow>
        <Svg
          name="arrowLeft"
          width={40}
          height={40}
          fill={theme.colors.$grey000}
        />
      </LeftArrow>
    </LeftArrowContainer>
  );
};

const NextArrow = ({ onClick }) => {
  const theme = useTheme();
  return (
    <RightArrowContainer onClick={onClick}>
      <RightArrow>
        <Svg
          name="arrowRight"
          width={40}
          height={40}
          fill={theme.colors.$grey000}
        />
      </RightArrow>
    </RightArrowContainer>
  );
};

const renderHighLighted = (highlights) => {
  const renderPosts = () => {
    return highlights.map(({ node: { _key, mainImage } }, index) => {
      console.log(mainImage);
      return (
        <HighLightedPost key={_key}>
          <HighLightedImage {...mainImage} />
        </HighLightedPost>
      );
    });
  };
  return (
    <HighLightedPostContainer>
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={5000}
        prevArrow={<BackArrow />}
        nextArrow={<NextArrow />}
      >
        {renderPosts()}
      </Slider>
    </HighLightedPostContainer>
  );
};

const renderLatestPosts = (posts) => {
  const highlights = posts.splice(0, 3);
  return (
    <>
      <Upper>{renderHighLighted(highlights)}</Upper>
      <Lower></Lower>
    </>
  );
};

const LatestPostsSection = ({ title }) => {
  const theme = useTheme();
  const latestPosts = useLatestPosts();
  return (
    <Container>
      <Content>
        <Title fontSize={theme.fonts.$fontSizeLG} color={theme.colors.$blue500}>
          {title}
        </Title>
        {renderLatestPosts(latestPosts)}
      </Content>
    </Container>
  );
};

LatestPostsSection.propTypes = {};

export default LatestPostsSection;
