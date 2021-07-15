import React from "react";
import PropTypes from "prop-types";
import BlockContent from "@sanity/block-content-to-react";
import useTheme from "../../../hooks/useTheme.hooks";
import {
  Container,
  Content,
  PhotoContainer,
  Photo,
  AuthorInfo,
  Name,
  Description,
} from "./authorList.styles";

const renderAuthor = (
  {
    author: {
      bio,
      image,
      name,
      slug: { current },
    },
  },
  index
) => {
  const theme = useTheme();
  return (
    <Content isEven={index % 2 === 0}>
      <PhotoContainer first={index === 0}>
        <Photo {...image} />
      </PhotoContainer>
      <AuthorInfo>
        <Name color={theme.colors.$grey900}>{name}</Name>
        <Description>
          <BlockContent blocks={bio || []} serializers={{}} />
        </Description>
      </AuthorInfo>
    </Content>
  );
};

const AuthorList = ({ authors }) => {
  return authors.map((author, index) => (
    <Container key={author._key}>{renderAuthor(author, index)}</Container>
  ));
};

AuthorList.propTypes = {};

export default AuthorList;
