import React from "react";
import PropTypes from "prop-types";

import { YoutubeIframe } from "./sections.styles";

const renderYoutube = ({ url }) => {
  return (
    <YoutubeIframe
      src="https://www.youtube.com/embed/KMe555guXWU"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></YoutubeIframe>
  );
};

renderYoutube.propTypes = {
  url: PropTypes.string.isRequired,
};

export default renderYoutube;
