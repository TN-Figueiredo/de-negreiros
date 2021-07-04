import React from "react";
import PropTypes from "prop-types";
import BlockContent from "@sanity/block-content-to-react";

import { Content, Title } from "./renderContent.styles";

const renderSections = (section) => {
  const { content, title } = section[0];
  console.log("section", section);
  return content.map((item) => {
    return (
      <Content key={item._key}>
        <Title>{title}</Title>
        <BlockContent blocks={item} serializers={{}} />
      </Content>
    );
  });
};

const RenderContent = ({ content }) => {
  return <>{renderSections(content)}</>;
};

RenderContent.propTypes = {};

export default RenderContent;
