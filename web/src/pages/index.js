import React from "react";
import Layout from "../components/organisms/layout";
import renderSections from "../components/organisms/sections";
import useHomePage from "../hooks/useHomePage.hooks";

import { Container } from "../style/index.styles";

const IndexPage = () => {
  const { sections } = useHomePage();
  return (
    <Layout>
      <Container>{renderSections(sections)}</Container>
    </Layout>
  );
};

export default IndexPage;
