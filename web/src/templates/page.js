import React from "react";
import Layout from "../components/organisms/layout";
import renderSections from "../components/organisms/sections";

import { Container } from "./page.styles";
const PageTemplate = ({ pageContext: { sections } }) => {
  return (
    <Layout>
      <Container>{renderSections(sections)}</Container>
    </Layout>
  );
};

export default PageTemplate;
