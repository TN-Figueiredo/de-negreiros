import React from "react";
import PropTypes from "prop-types";
import { getYoutubeEmbed } from "../../../../lib/helpers";

import { YoutubeIframe } from "./sections.styles";

const renderYoutube = ({ url }) => (
  <YoutubeIframe
    src={getYoutubeEmbed(url)}
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></YoutubeIframe>
);

renderYoutube.propTypes = {
  url: PropTypes.string.isRequired,
};

export default renderYoutube;
