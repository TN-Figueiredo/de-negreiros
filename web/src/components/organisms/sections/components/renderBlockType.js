import React from "react";
import PropTypes from "prop-types";
import BlockContent from "@sanity/block-content-to-react";
import Title from "../../../atoms/title";
import useTheme from "../../../../hooks/useTheme.hooks";

import { BlockContentJustified } from "./sections.styles";

const renderBlockType = ({ block, title }) => {
  const theme = useTheme();
  return block.map((block, index) => {
    return (
      <div key={block._key || index}>
        <Title fontSize={theme.fonts.$fontSizeLG} color={theme.colors.$grey000}>
          {title}
        </Title>
        <BlockContentJustified>
          <BlockContent blocks={block} serializers={{}} />
        </BlockContentJustified>
      </div>
    );
  });
};

renderBlockType.propTypes = {};

export default renderBlockType;
