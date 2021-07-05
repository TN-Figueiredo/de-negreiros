import React from "react";
import PropTypes from "prop-types";
import isBlockType from "../../../../lib/blockTypes";
import renderBlockType from "./renderBlockType";
import renderYoutube from "./renderYoutube";

import { Content } from "./sections.styles";

const renderTypes = {
  block: renderBlockType,
  youtube: renderYoutube,
};

const renderSections = (sections) => {
  return sections.map((section, index) => {
    const type = isBlockType(section._type) ? "block" : section._type;
    return (
      <Content key={section._key} last={index === sections.length - 1}>
        {renderTypes[type](section)}
      </Content>
    );
  });
};

const RenderContent = ({ content }) => {
  return <>{renderSections(content)}</>;
};

RenderContent.propTypes = {};

export default RenderContent;
