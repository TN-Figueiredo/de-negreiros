import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/organisms/layout";
import renderSections from "../components/organisms/sections";

import { Container } from "./article.styles";
const ArticleTemplate = (props) => {
  return (
    <Layout>
      <Container>Article Template</Container>
    </Layout>
  );
};

ArticleTemplate.propTypes = {};

export default ArticleTemplate;
