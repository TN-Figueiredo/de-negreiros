import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
import Slider from "react-slick";
import BlockContent from "@sanity/block-content-to-react";
import { format } from "date-fns";
import Title from "../../../atoms/title";
import Svg from "../../../atoms/svg";
import useTheme from "../../../../hooks/useTheme.hooks";
import useLatestPosts from "../../../../hooks/useLatestPosts.hooks";
import { getWindowDimensions } from "../../../../lib/helpers";

import {
  Container,
  Content,
  Upper,
  Lower,
  HighLightedPostContainer,
  HighLightedPostInfo,
  HighLightedPostTitle,
  HighLightedPostExcerpt,
  HighLightedPostPublishedAt,
  MobileHighlightedPost,
  MobileHighlightedCategory,
  MobileHighlightedTitle,
  LeftArrowContainer,
  LeftArrow,
  RightArrowContainer,
  RightArrow,
  HighLightedPost,
  HighLightedImage,
  MoreArticles,
  ArticleImage,
  ArticleBody,
  ArticleTitle,
  Category,
  MoreView,
  More,
  Details,
  Author,
  Clock,
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
    return highlights.map(
      ({
        node: {
          _key,
          categories,
          mainImage,
          title,
          publishedAt,
          excerpt,
          slug: { current },
        },
      }) => {
        const dateSegment = format(new Date(publishedAt), "yyyy/MM");
        return (
          <HighLightedPost key={_key}>
            <HighLightedImage
              onClick={() => navigate(`/artigos/${dateSegment}/${current}`)}
              {...mainImage}
            />
            <HighLightedPostInfo>
              <HighLightedPostTitle>{title}</HighLightedPostTitle>
              <HighLightedPostExcerpt>
                <BlockContent blocks={excerpt || []} serializers={{}} />
              </HighLightedPostExcerpt>
              <HighLightedPostPublishedAt>
                {publishedAt}
              </HighLightedPostPublishedAt>
            </HighLightedPostInfo>
            <MobileHighlightedPost>
              <MobileHighlightedCategory>
                {categories[0].title}
              </MobileHighlightedCategory>
              <MobileHighlightedTitle>{title}</MobileHighlightedTitle>
            </MobileHighlightedPost>
          </HighLightedPost>
        );
      }
    );
  };

  const slider = () => {
    if (getWindowDimensions().width < 601) {
      return (
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
          prevArrow={<BackArrow />}
          nextArrow={<NextArrow />}
          appendDots={() => <div></div>}
        >
          {renderPosts()}
        </Slider>
      );
    } else {
      return (
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
          prevArrow={<BackArrow />}
          nextArrow={<NextArrow />}
        >
          {renderPosts()}
        </Slider>
      );
    }
  };
  return <HighLightedPostContainer>{slider()}</HighLightedPostContainer>;
};

const renderExtraPosts = (posts) => {
  const theme = useTheme();
  return posts.map(
    (
      {
        node: {
          _key,
          authors,
          categories,
          mainImage,
          publishedAt,
          title,
          updatedAt,
          slug: { current },
        },
      },
      index
    ) => {
      console.log("current", current);
      const dateSegment = format(new Date(publishedAt), "yyyy/MM");
      return (
        <MoreArticles
          key={index}
          first={index === 0 ? 1 : 0}
          last={index === posts.length - 1 ? 1 : 0}
        >
          <ArticleImage
            {...mainImage}
            onClick={() => navigate(`/artigos/${dateSegment}/${current}`)}
          />
          <ArticleBody to={`/artigos/${dateSegment}/${current}`}>
            <Category>{categories[0].title}</Category>
            <ArticleTitle>{title}</ArticleTitle>
            <Details>
              <Clock>
                <Svg name="clock" fill={theme.colors.$grey300} />
              </Clock>
              3h ago by <Author to="/">{authors[0].author.name}</Author>
            </Details>
          </ArticleBody>
        </MoreArticles>
      );
    }
  );
};

const renderLatestPosts = (posts) => {
  const highlights = posts.slice(0, 3);
  const normalPosts = posts.slice(3, posts.length);
  return (
    <>
      <Upper>{renderHighLighted(highlights)}</Upper>
      <Lower>{renderExtraPosts(normalPosts)}</Lower>
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
        <MoreView>
          <More to="/artigos">Ver mais</More>
        </MoreView>
      </Content>
    </Container>
  );
};

LatestPostsSection.propTypes = {};

export default LatestPostsSection;
