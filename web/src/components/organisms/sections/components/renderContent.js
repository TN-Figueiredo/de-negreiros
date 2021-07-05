import React from "react";
import PropTypes from "prop-types";
import BlockContent from "@sanity/block-content-to-react";
import Title from "../../../atoms/title";
import useTheme from "../../../../hooks/useTheme.hooks";

import { Content, BlockContentJustified } from "./renderContent.styles";

const renderSections = (section) => {
  const theme = useTheme();
  const { content, title } = section[0];
  console.log("section", section);
  return content.map((item) => {
    return (
      <Content key={item._key}>
        <Title fontSize={theme.fonts.$fontSizeLG} color={theme.colors.$blue500}>
          {title}
        </Title>
        <BlockContentJustified>
          <BlockContent blocks={item} serializers={{}} />
        </BlockContentJustified>
      </Content>
    );
  });
};

const RenderContent = ({ content }) => {
  return <>{renderSections(content)}</>;
};

RenderContent.propTypes = {};

export default RenderContent;
